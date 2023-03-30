import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../../apis/user";
import { Error } from "../../types/error.type";

export const UserFeature = () => {
  const navigate = useNavigate();

  const updatePW = useMutation(updatePassword, {
    onSuccess: () => {
      alert("비밀번호 변경 완료 !!");
      navigate("/");
    },
    onError: (error: Error) => {
      alert(error.response.data.message);
    },
  });

  return { updatePW };
};
