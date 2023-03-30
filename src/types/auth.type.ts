export type LOGIN_AUTH = {
  email: string;
  password: string;
};

export type RESET_REQUEST = {
  newPW: string;
  oldPW: string;
};

export type USER = {
  accessToken: string;
  refreshToken: string;
  login?: boolean;
};
