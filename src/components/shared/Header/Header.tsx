import React, { useState } from "react";
import { TEACHER } from "../../../constants/user/auth.constant";
import { useUser } from "../../../hooks/useUser";
import { HeaderLayout } from "../../layout/HeaderLayout";
import * as S from "./Header.style";
import { ProfilePopover } from "./ProfilePopover/ProfilePopover";

export const Header = () => {
  const [searchText, setSearchText] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useUser();

  return (
    <HeaderLayout bgColor="white">
      <S.HeaderNav>
        <img
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
          src="/assets/logo.svg"
          alt="logo"
        />
        <S.NavLink to="look">둘러보기</S.NavLink>
        {user.authority && (
          <S.NavLink
            to={`/record${user.authority === TEACHER ? "/teacher" : ""}`}
          >
            기록보기
          </S.NavLink>
        )}
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
            <S.Name onClick={() => setIsOpen((prev) => !prev)}>
              {user.name}
            </S.Name>
            {isOpen && <ProfilePopover close={() => setIsOpen(false)} />}
          </div>
        ) : (
          <S.NavLink to="login">로그인</S.NavLink>
        )}
      </S.HeaderNav>
    </HeaderLayout>
  );
};
