import * as S from "./Field.style";

export default function Field({
  name,
  setting,
}: {
  name: string;
  setting: JSX.Element;
}) {
  return (
    <S.Field>
      <S.Name>{name}</S.Name>
      <S.Setting>{setting}</S.Setting>
    </S.Field>
  );
}
