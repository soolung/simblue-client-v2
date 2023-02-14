import server from "../utils/axios/server";

export const accessTokenExpired = async () => {
  localStorage.setItem(
    "accessToken",
    (
      await server.put("/auth", null, {
        headers: {
          "Refresh-Token": localStorage.refreshToken,
        },
      })
    ).data.accessToken
  );
};
