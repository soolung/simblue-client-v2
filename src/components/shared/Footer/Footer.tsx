import React from "react";
import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const Footer = () => {
  return (
    <FooterStyle>
      <p>우수경과 김한울과 갱장히 많은 사람들의 프로젝트 그루브, 수렁.</p>
      <p>
        @soolung
        <a href="https://github.com/soolung" target="_blank">
          <img alt="github" src="/assets/github.svg" />
        </a>
      </p>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  width: 100%;
  color: ${Colors.mediumGray};
  font-size: 15px;
  padding: 15px 0;

  p {
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin-left: 5px;
      display: inline-block;
      font-size: 0;
      letter-spacing: 0;
      word-spacing: 0;

      img {
        width: 19px;
        height: 19px;
      }
    }
  }
`;
