import * as S from "./AdvancedSettingModal.style";
import Field from "./Field/Field";
import Button from "../../common/Button/Button";
import Owner from "./Owner/Owner";
import ResultSearch from "./ResultSearch/ResultSearch";

import { useMutation, useQueryClient } from "react-query";
import { deleteApplicationForm } from "../../../../apis/application";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../atoms/user";
import { Colors } from "../../../../constants/colors.constant";

interface Proptypes {
  isOpen: boolean;
  closeModal: (event: React.MouseEvent | React.KeyboardEvent) => void;
  data: any;
  id: number;
  mode: string;
  ownerList: OwnerListType[];
  addOwner: (result: { teacherId: number; name: string }) => void;
  deleteOwner: (teacherId: number) => void;
}
const AdvancedSettingModal = ({
  isOpen,
  closeModal,
  data,
  id,
  mode,
  ownerList,
  addOwner,
  deleteOwner,
}: Proptypes) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const user = useRecoilValue(userState);

  const deleteConfirm = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteApplication.mutate(id);
    }
  };

  const deleteApplication = useMutation(deleteApplicationForm, {
    onSuccess: () => {
      alert("삭제 성공!");
      queryClient.invalidateQueries(["getFourLatestApplication"]);
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <S.StyledModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal advanced-setting-modal"
      overlayClassName="modal-overlay"
    >
      <S.Left>
        <S.Title>
          <span className="emoji">⚙️</span> 고급 설정
        </S.Title>
        <S.SettingContent>
          <div>
            {data.map((f: any, index: number) => (
              <Field name={f.name} setting={f.setting} key={index} />
            ))}
          </div>
          {mode === "update" && (
            <Button
              width="100%"
              backgroundColor="white"
              style={{
                height: "45px",
                borderRadius: "8px",
                border: `1px solid ${Colors.mediumGray}`,
              }}
              spanColor="`${Colors.mediumGray}`"
              spanFontSize="23px"
              text="삭제하기"
              className="application-delete-button"
              action={deleteConfirm}
            />
          )}
        </S.SettingContent>
      </S.Left>
      <S.Right>
        <S.SubTitle>담당 선생님 지정</S.SubTitle>
        <ResultSearch width="100%" onResultClick={addOwner} />
        <S.OwnerList>
          <Owner
            name={user.name}
            onDelete={() => alert("본인은 지울 수 없습니다.")}
            key={user.roleId}
          />
          {ownerList.map((o: any) => (
            <Owner
              name={o.name}
              onDelete={() => deleteOwner(o.teacherId)}
              key={o.teacherId}
            />
          ))}
        </S.OwnerList>
      </S.Right>
    </S.StyledModal>
  );
};

export default AdvancedSettingModal;
