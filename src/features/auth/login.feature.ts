import {
  ACCESS_KEY,
  REFRESH_KEY,
  AUTHORITY,
  NAME,
} from "../../constants/user/auth.constant";
import { Storage } from "../../lib/storage/storage";
import { useMutation } from "react-query";
import { loginUser } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
import { LOGIN_AUTH } from "../../types/auth.type";

export const LoginFeature = (request: LOGIN_AUTH) => {
  const navigate = useNavigate();

  const { mutate } = useMutation(loginUser, {
    onSuccess: (res) => {
      alert("로그인 성공");
      const { accessToken, refreshToken, authority, name } = res;

      Storage.setItem(ACCESS_KEY, accessToken);
      Storage.setItem(REFRESH_KEY, refreshToken);
      localStorage.setItem(AUTHORITY, authority);
      localStorage.setItem(NAME, name);

      if (!res?.login) {
        navigate("/signup");
      } else {
        navigate("/");
      }
    },
  });

  const login = () => {
    console.log(request);
    if (!request.email.endsWith("@bssm.hs.kr")) {
      request.email += "@bssm.hs.kr";
    }
    mutate({
      email: request.email,
      password: request.password,
    });
  };

  return { login };
};
