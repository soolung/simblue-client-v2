import React from "react";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../../../../atoms/user";
import { Colors } from "../../../../constants/colors.constant";

export const ProfilePopover = ({ close }: { close: Function }) => {
  const navigate = useNavigate();
  const resetUser = useResetRecoilState(userState);
  return (
    <Popover>
      <button onClick={() => navigate("/auth/update/password")}>비밀번호 변경</button>
      <button
        onClick={() => {
          localStorage.clear();
          resetUser();
          navigate("/");
          window.location.reload();
          close();
        }}>
        로그아웃
      </button>
      <Ggoranji />
    </Popover>
  );
};

const Popover = styled.div`
  display: flex;
  position: absolute;
  width: 300%;
  top: 65px;
  right: 0;
  padding: 10px;
  border-radius: 15px;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 16px 20px hsl(0deg 0% 68% / 20%);

  button {
    border-radius: 15px;
    border: none;
    background-color: white;
    padding: 10px 0;
    &:hover {
      background-color: ${Colors.lightGray};
    }
  }
`;

const Ggoranji = styled.div`
  position: absolute;
  right: 10%;
  bottom: 100%;
  height: 11px;
  overflow: hidden;
  margin-bottom: -1px;

  &::after {
    content: "";
    margin-top: 4px;
    border: 1px solid $light-grey;
    background-color: #fff;
    height: 14px;
    width: 14px;
    display: block;
    border-top-right-radius: 30%;
    -webkit-transform: rotate(-55deg) skewX(-20deg);
    transform: rotate(-55deg) skewX(-20deg);
  }
`;
