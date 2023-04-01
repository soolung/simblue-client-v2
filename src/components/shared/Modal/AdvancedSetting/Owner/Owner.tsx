import * as S from "./Owner.style";
const Owner = ({
  name,
  onDelete,
}: {
  name: string;
  onDelete: React.MouseEventHandler<HTMLImageElement>;
}) => {
  return (
    <S.Owner>
      <S.ProfileImage
        alt="profile-image"
        src="/assets/basic-profile-image.svg"
      />
      <S.Teacher>
        <span>{name}</span>
        <S.Light>선생님</S.Light>
      </S.Teacher>
      <S.DeleteImage alt="delete" src="/assets/cancel.svg" onClick={onDelete} />
    </S.Owner>
  );
};

export default Owner;
