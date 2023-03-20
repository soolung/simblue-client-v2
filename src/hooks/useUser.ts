import { useQuery } from "react-query";
import { getUserInfo } from "../apis/user";
import { GET_USER_INFO } from "../constants/keys/user.key";
import { ACCESS_KEY } from "../constants/user/auth.constant";

type USER_INFO = {
  authority: string;
  email: string;
  name: string;
  roleId: number;
};

export const useUser = () => {
  const { data } = useQuery<USER_INFO>([GET_USER_INFO], () => getUserInfo(), {
    enabled: !!localStorage.getItem(ACCESS_KEY),
  });

  console.log(data);
};
