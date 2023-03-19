import server from "../../apis/client/index";
import { ACCESS_KEY } from "../../constants/user/auth.constant";
import { Storage } from "../../lib/storage/Storage";

export const accessTokenExpired = async () => {
  try {
    const { data } = await server.put("/auth", null, {
      headers: {
        "Refresh-Token": Storage.getItem("accessToken"),
      },
    });
    Storage.setItem(ACCESS_KEY, data.accessToken);
  } catch {
    alert("세션이 만료되었습니다");
    localStorage.clear();
  }
};

export const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${Storage.getItem("refreshToken")}`,
    },
  };
};
