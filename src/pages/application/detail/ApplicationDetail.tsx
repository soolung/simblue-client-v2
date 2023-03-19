import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { REQUEST } from "../../../types/application.type";
import { Notice } from "./notice/Notice";
import { Question } from "./question/Question";
import * as S from "./Application.style";
import { DetailLayout } from "../../../components/layout/DetailLayout";
import { Button } from "../../../components/shared/Button/Button";
import { ApplicationDetailFeature } from "../../../features/application/applicationDetail.feature";
import { useUser } from "../../../hooks/useUser";

export const ApplicationDetail = () => {
  const { applicationId } = useParams();
  const id = Number(applicationId);

  const notice = useRef<HTMLDivElement>(null);
  const rightSide = useRef<HTMLDivElement>(null);

  const { user } = useUser();

  const [request, setRequest] = useState<REQUEST>([]);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { reply, data } = ApplicationDetailFeature({ id, request });

  const handleRequest = (a: string[], index: number): void => {
    const i = request.findIndex((r) => r.id === index);
    let coArr = [...request];
    if (i !== -1) {
      coArr[i] = { ...coArr[i], replyDetailList: a };
      setRequest(coArr);
    } else if (!(a.length === 0))
      setRequest([...request, { id: index, replyDetailList: a }]);
  };

  const handleNotice = (hide: boolean) => {
    if (window.innerWidth < 500) {
      notice!.current!.style.width = "100%";
      notice!.current!.style.animationName = hide ? "hideMobile" : "openMobile";
      rightSide!.current!.style.animationName = hide
        ? "toCenterMobile"
        : "toRight";
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
        <S.Arrow
          onClick={() => handleNotice(true)}
          src="/assets/left-double-arrow.svg"
        />
        {!(data?.noticeList.length === 0) ? (
          data?.noticeList.map((n) => <Notice notice={n} />)
        ) : (
          <p>공지사항이 없습니다.</p>
        )}
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
        <Button disabled={user.authority ? false : true} event={reply}>
          {user.authority ? "제출하기" : "로그인 후 응답할 수 있어요"}
        </Button>
      </S.RightSide>
    </DetailLayout>
  );
};
