import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { APPLICATION_DETAIL, REQUEST } from "../../../apis/@types/application";
import { getApplicationDetail } from "../../../apis/application";
import { GET_APPLICATION_DETAIL } from "../../../constants/keys";
import { Notice } from "./notice/Notice";
import { Question } from "./question/Question";
import * as S from "./Application.style";
import { DetailLayout } from "../../../components/layout/DetailLayout";
import { replyApplication } from "../../../apis/post";
import { Button } from "../../../components/shared/button/Button";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atoms/user";

export const ApplicationDetail = () => {
  const { applicationId } = useParams();
  const user = useRecoilValue(userState);
  const notice = useRef<HTMLDivElement>(null);
  const rightSide = useRef<HTMLDivElement>(null);
  const { data } = useQuery<APPLICATION_DETAIL>([GET_APPLICATION_DETAIL], () => getApplicationDetail(Number(applicationId)));
  const [request, setRequest] = useState<REQUEST>([]);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { mutate } = useMutation(replyApplication, {
    onSuccess: () => {
      alert("성공!");
      window.location.href = "/";
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const errMessage = err.response.data.message;
      alert(errMessage);
    },
  });

  const handleRequest = (a: string[], index: number): void => {
    const i = request.findIndex((r) => r.id === index);
    let coArr = [...request];
    if (i !== -1) {
      coArr[i] = { ...coArr[i], replyDetailList: a };
      setRequest(coArr);
    } else if (!(a.length === 0)) setRequest([...request, { id: index, replyDetailList: a }]);
  };

  const reply = () => {
    if (request.length === data?.questionList.length && !request.find((r) => r.replyDetailList.length < 1 || r.replyDetailList[0] === "")) {
      mutate({ applicationId: Number(applicationId), replyList: request });
    } else console.log("다 입력 안 됨");
  };

  const handleNotice = (hide: boolean) => {
    if (window.innerWidth < 500) {
      notice!.current!.style.width = "100%";
      notice!.current!.style.animationName = hide ? "hideMobile" : "openMobile";
      rightSide!.current!.style.animationName = hide ? "toCenterMobile" : "toRight";
    } else {
      notice!.current!.style.animationName = hide ? "hide" : "open";
      rightSide!.current!.style.animationName = hide ? "toCenter" : "toRight";
    }
    setIsOpen(!hide);
  };

  useEffect(() => {
    if (window.innerWidth < 500) handleNotice(false);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 500) {
        notice!.current!.style.width = "100%";
        if (isOpen) handleNotice(false);
      } else notice!.current!.style.width = "24%";
    });
  }, []);

  return (
    <DetailLayout>
      {!isOpen && (
        <S.ReOpen onClick={() => handleNotice(false)}>
          <S.OpenArrow src="/assets/left-double-arrow.svg" />
        </S.ReOpen>
      )}
      <S.Notices ref={notice}>
        <S.Arrow onClick={() => handleNotice(true)} src="/assets/left-double-arrow.svg" />
        {!(data?.noticeList.length === 0) ? data?.noticeList.map((n) => <Notice notice={n} />) : <p>공지사항이 없습니다.</p>}
      </S.Notices>
      <S.RightSide ref={rightSide}>
        <S.Section>
          <S.Top>
            <S.Title>
              {data?.emoji} {data?.title}
            </S.Title>
            <S.SubTitle>{data?.description}</S.SubTitle>
            <S.SubTitle>{data?.endDate || "- 상시"}</S.SubTitle>
          </S.Top>
          {data?.questionList.map((q) => {
            return <Question handleRequest={handleRequest} quest={q} />;
          })}
        </S.Section>
        <Button text={user.authority ? "제출하기" : "로그인 후 응답할 수 있어요"} disabled={user.authority ? false : true} event={reply} />
      </S.RightSide>
    </DetailLayout>
  );
};
