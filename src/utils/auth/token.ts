import server from "../../apis/client/index";

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
