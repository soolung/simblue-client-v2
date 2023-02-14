//Application components

import { Link } from "react-router-dom";
import * as S from "./Application.style";
export const Application = (props: any) => {
  return (
    <Link to={`/application/${props.id}`}>
      <S.Application>
        <S.Title>
          <S.SecondTitle>{props.title}</S.SecondTitle>
          <S.Emoji>{props.emoji}</S.Emoji>
        </S.Title>
        <S.Comment>{props.description}</S.Comment>
        <S.EndDate>- {props.isAlways ? "상시" : props.endDate}</S.EndDate>
      </S.Application>
    </Link>
  );
};
