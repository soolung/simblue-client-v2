import * as S from "./Toggle.style";

type ToggleProps = {
  value: boolean;
  name?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  readOnly?: boolean;
  label?: string;
};

const Toggle = ({ label, onClick, value, name, id, readOnly }: ToggleProps) => {
  return (
    <>
      <S.Toggle onClick={onClick}>
        <input
          type="hidden"
          value={value.toString()}
          name={name}
          id={id}
          readOnly={readOnly}
        />
        {value ? (
          <S.ToggleContainer></S.ToggleContainer>
        ) : (
          <S.DisabledToggleContainer></S.DisabledToggleContainer>
        )}
        <S.ToggleCircle></S.ToggleCircle>
        <span>{label}</span>
      </S.Toggle>
    </>
  );
};

export default Toggle;
