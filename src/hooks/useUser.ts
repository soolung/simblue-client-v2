import { useQuery } from "react-query";
import { getUserData } from "../apis/user";
import { GET_USER_DATA } from "../constants/keys/user.key";
import { ACCESS_KEY } from "../constants/user/auth.constant";
import { Storage } from "../lib/storage/storage";

interface UserDataType {
  authority: string;
  email: string;
  name: string;
  roleId: number;
}

export const useUser = () => {
  const { data } = useQuery<UserDataType>(
    [GET_USER_DATA],
    () => getUserData(),
    {
      enabled: !!Storage.getItem(ACCESS_KEY),
    }
  );

  console.log(data);

  return {
    user: data || {
      authority: "",
      email: "",
      name: "",
      roleId: "",
    },
  };
};
