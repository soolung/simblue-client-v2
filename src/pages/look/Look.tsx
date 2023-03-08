import React, { useState, useEffect } from "react";
import * as S from "./Look.style";
import { useQuery } from "react-query";
import Categories from "./Categories";
import { getApplications } from "../../apis/application";
import { Application } from "../../components/shared/Application/Application";

interface Category {
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

  const { data, refetch } = useQuery(
    ["getApplications"],
    () => getApplications(selectedCategory.uri),
    {
      onSuccess: () => {},
    }
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
      <S.Application>
        {data?.map((a: any, index: number) => (
          <Application
            id={a.id}
            title={a.title}
            emoji={a.emoji}
            description={a.description}
            endDate={a.endDate}
            isAlways={a.isAlways}
            key={index}
          />
        ))}
      </S.Application>
    </S.Look>
  );
};
