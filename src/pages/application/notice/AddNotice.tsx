import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";
import { NoticeFeature } from "../../../features/notice";

export const AddNotice = ({ applicationId }: { applicationId: number }) => {
  const [notice, setNotice] = useState<string>("");
  const { makeNotice } = NoticeFeature(Number(applicationId), notice, setNotice);

  return (
    <WriteNotice>
      <NoticeInput value={notice} onChange={(e) => setNotice(e.target.value)} />
      <AddNoticeBtn onClick={() => (notice ? makeNotice.mutate() : alert("공지를 작성해주세요."))}>공지 하기</AddNoticeBtn>
    </WriteNotice>
  );
};

const WriteNotice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  @media screen and (max-width: 960px) and (min-width: 500px) {
    flex-direction: column;
    height: 120px;
    row-gap: 5px;
  }
`;

const NoticeInput = styled.textarea`
  width: 70%;
  height: 100%;
  padding: 5%;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${Colors.gray};
  font-size: 18px;
  resize: none;
  outline: none;

  @media screen and (max-width: 960px) and (min-width: 500px) {
    width: 100%;
  }
`;

const AddNoticeBtn = styled.button`
  width: 28%;
  height: 100%;
  padding: 0 2%;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: ${Colors.mainRed};
  font-size: 25px;
  font-weight: 500;

  @media screen and (max-width: 960px) and (min-width: 500px) {
    width: 100%;
    font-size: 20px;
  }
`;
