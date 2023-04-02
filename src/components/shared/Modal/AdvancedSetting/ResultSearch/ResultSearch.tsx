import { useState } from "react";
import { useQuery } from "react-query";
import { searchTeacher } from "../../../../../apis/user";
import * as S from "./ResultSearch.style";

interface Proptypes {
  onSearch: () => void;
  onResultClick: ({ teacherId, name }: { teacherId: any; name: any }) => void;
}

const ResultSearch = ({ onSearch, onResultClick }: Proptypes) => {
  const [searchText, setSearchText] = useState("");
  const [searchTextOnFocus, setSearchTextOnFocus] = useState(false);

  const { data, refetch } = useQuery(
    "searchTeacher",
    () => searchTeacher(searchText),
    {
      onSuccess: (data) => {},
      enabled: false,
    }
  );

  const toggleSearchTextOnFocus = () => {
    setSearchTextOnFocus(!searchTextOnFocus);
  };

  const writeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);

    if (searchText.length > 0) {
      refetch();
    }
  };

  const resetSearchText = () => {
    setSearchText("");
  };

  const onSearchAndReset = () => {
    onSearch();
    resetSearchText();
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchAndReset();
    }
  };

  const onResultClickAndReset = ({
    teacherId,
    name,
  }: {
    teacherId: number;
    name: string;
  }) => {
    onResultClick({
      teacherId: teacherId,
      name: name,
    });

    resetSearchText();
  };

  return (
    <S.ResultSearch
      className={`result-search ${searchTextOnFocus ? "focused" : ""}`}
    >
      <S.Search>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchText}
          onChange={writeSearchText}
          onFocus={toggleSearchTextOnFocus}
          onBlur={toggleSearchTextOnFocus}
          onKeyUp={onKeyUp}
        />
        <S.SearchDelete
          className={
            "search-delete " +
            (searchText.length > 0 && searchTextOnFocus
              ? "search-delete-show"
              : "search-delete-no")
          }
          onClick={resetSearchText}
        />
        <S.SearchGo
          type="image"
          src="/assets/search.svg"
          alt="search-go"
          onClick={onSearchAndReset}
        />
      </S.Search>
      {searchTextOnFocus &&
        (searchText.length > 0 && data?.length > 0 ? (
          <S.Result>
            {data.map((d: any, index: number) => (
              <S.ResultTeacher
                onMouseDown={() =>
                  onResultClickAndReset({
                    teacherId: d.teacherId,
                    name: d.name,
                  })
                }
                key={index}
              >
                <S.ProfileImage
                  alt="profile-image"
                  src="/assets/basic-profile-image.svg"
                />
                <span>{d.name}</span>
              </S.ResultTeacher>
            ))}
          </S.Result>
        ) : (
          <S.NoResult>결과가 없습니다.</S.NoResult>
        ))}
    </S.ResultSearch>
  );
};

export default ResultSearch;
