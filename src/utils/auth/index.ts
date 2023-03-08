import server from "../../apis/client/index";
import { ACCESS_KEY } from "../../constants/token";

export const accessTokenExpired = async () => {
  localStorage.setItem(
    ACCESS_KEY,
    (
      await server.put("/auth", null, {
        headers: {
          "Refresh-Token": localStorage.refreshToken,
        },
      })
    ).data.accessToken
  );
};
