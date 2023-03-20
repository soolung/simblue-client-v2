import * as S from "./Form.style";
import Text from "../../components/shared/Text/Text";
import TextBox from "../../components/shared/TextBox/TextBox";
export const Form = () => {
  return (
    <S.Form>
      asds
      <Text placeholder="제목" name="title" />
      <TextBox name="year" placeholder={"2022"} />
    </S.Form>
  );
};
