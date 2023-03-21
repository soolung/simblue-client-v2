import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../apis/user";
import { userState } from "../atoms/user";
import { GET_USER_INFO } from "../constants/keys/user.key";
import { ACCESS_KEY } from "../constants/user/auth.constant";
import { USER_INFO } from "../types/user.type";
import { useNavigate } from "react-router-dom";
import { Storage } from "../lib/storage";

export const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const { data } = useQuery<USER_INFO>([GET_USER_INFO], () => getUserInfo(), {
    enabled: !!Storage.getItem(ACCESS_KEY),
  });

  useEffect(() => {
    if (data) setUser(data);
  }, [setUser, data, navigate]);

  return {
    user: user || {
      authority: "",
      email: "",
      name: "",
      roleId: 0,
    },
  };
};
