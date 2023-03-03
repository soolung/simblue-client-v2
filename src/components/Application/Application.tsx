import { Link } from "react-router-dom";
import * as S from "./Application.style";

interface Props {
  id: string;
  title: string;
  emoji: string;
  description: string;
  isAlways: boolean;
  endDate: string;
}

export const Application = (props: Props) => {
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
