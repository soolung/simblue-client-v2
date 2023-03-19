import {
  ACCESS_KEY,
  REFRESH_KEY,
  AUTHORITY,
  NAME,
} from "../../constants/user/auth.constant";
import { Storage } from "../../lib/storage/storage";
import { useMutation, useQuery } from "react-query";
import { getGoogleAuthLink, loginUser } from "../../apis/auth";
import { useSetRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { useNavigate } from "react-router-dom";
import { LOGIN_AUTH } from "../../types/auth.type";
import { GOOGLE_AUTH_LINK } from "../../constants/keys/auth.keys";

export const LoginFeature = (request: LOGIN_AUTH) => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const { mutate } = useMutation(loginUser, {
    onSuccess: (data) => {
      Storage.setItem(ACCESS_KEY, data.accessToken);
      Storage.setItem(REFRESH_KEY, data.refreshToken);
      // getUser api 만들면 useUSer 만들겠습니다
      localStorage.setItem(AUTHORITY, data.authority);
      localStorage.setItem(NAME, data.name);
      setUser({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        authority: data.authority,
        name: data.name,
      });

      if (!data?.login) {
        navigate("/signup");
      } else {
        navigate("/");
      }
    },
  });

  const login = () => {
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

export const GetGoogleAuthLink = () => {
  const { data } = useQuery([GOOGLE_AUTH_LINK], getGoogleAuthLink);

  return { data };
};
