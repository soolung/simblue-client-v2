import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atoms/user";
import { Layout } from "../../layout/Layout";
import * as S from "./Header.style";
import { ProfilePopover } from "./profilePopover/ProfilePopover";

export const Header = () => {
  const [searchText, setSearchText] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const user = useRecoilValue(userState);

  return (
    <Layout bgColor="white">
      <S.HeaderNav>
        <img
          onClick={() => (window.location.href = "/")}
          src="/assets/logo.svg"
        />
        <S.NavLink to="look">둘러보기</S.NavLink>
        {user.authority && <S.NavLink to="record">기록보기</S.NavLink>}
        <S.SearchBar>
          <S.SearchInput
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="검색어를 입력해주세요."
          />
          {searchText && <S.CancelIcon onClick={() => setSearchText("")} />}
          <img alt="설치" src="/assets/search.svg" />
        </S.SearchBar>
        {user.authority ? (
          <div style={{ position: "relative" }}>
            <S.Name onClick={() => setIsOpen((prev) => !prev)}>{user.name}</S.Name>
            {isOpen && <ProfilePopover close={() => setIsOpen(false)} />}
          </div>
        ) : (
          <S.NavLink to="login">로그인</S.NavLink>
        )}
      </S.HeaderNav>
    </Layout>
  );
};
