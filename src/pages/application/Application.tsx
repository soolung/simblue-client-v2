import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailLayout } from "../../components/layout/DetailLayout";
import { AuthRequired } from "../../components/shared/AuthRequired/AuthRequired";
import { TEACHER } from "../../constants/user/auth.constant";
import { ApplicationDetailFeature } from "../../features/application";
import * as S from "./Application.style";
import { ApplicationDetail } from "./detail/ApplicationDetail";
import { ApplicationManage } from "./manage/ApplicationManage";
import { AddNotice } from "./notice/AddNotice";
import { Notice } from "./notice/Notice";

export const Application = () => {
  const { applicationId } = useParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const notice = useRef<HTMLDivElement>(null);
  const rightSide = useRef<HTMLDivElement>(null);
  const { data, location } = ApplicationDetailFeature();

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
        {location && <AddNotice applicationId={Number(applicationId)} />}
        <S.Notice>
          {!(data?.noticeList.length === 0) ? (
            data?.noticeList.map((n) => <Notice location={location} notice={n} applicationId={Number(applicationId)} />)
          ) : (
            <p>공지사항이 없습니다.</p>
          )}
        </S.Notice>
      </S.Notices>
      <S.RightSide ref={rightSide}>
        {location ? <AuthRequired children={<ApplicationManage />} authority={TEACHER} /> : <ApplicationDetail />}
      </S.RightSide>
    </DetailLayout>
  );
};
