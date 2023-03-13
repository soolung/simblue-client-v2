import React, { useState, useEffect } from "react";
import * as S from "./Look.style";
import { useQuery } from "react-query";
import Categories from "./Categories";
import { getApplication } from "../../apis/application/index";
import { Application } from "../../components/shared/application/Application";
import { APPLICATION } from "../../apis/@types/application";

export interface Category {
  text: string;
  description: string;
  uri: string;
}

export const Look = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Categories.deadline
  );

  const categories: Category[] = [
    Categories.deadline,
    Categories.latest,
    Categories.always,
  ];

  const { data, refetch } = useQuery("getApplication", () =>
    getApplication(selectedCategory.uri)
  );

  useEffect(() => {
    refetch();
  }, [selectedCategory]);

  return (
    <S.Look>
      <S.Header>
        <S.Title>둘러보기</S.Title>
        <S.Description>{selectedCategory.description}</S.Description>
      </S.Header>
      <S.Categories>
        {categories.map((c, index) => (
          <S.Section
            key={index}
            onClick={() => setSelectedCategory(c)}
            selectedCategory={selectedCategory}
            selected={c}
          >
            {c.text}
          </S.Section>
        ))}
      </S.Categories>
      {data?.length > 0 ? (
        <S.Application>
          {data?.map((a: APPLICATION) => (
            <Application data={a} key={a.id} />
          ))}
        </S.Application>
      ) : (
        <S.None>{selectedCategory.description}이 없습니다.</S.None>
      )}
    </S.Look>
  );
};
