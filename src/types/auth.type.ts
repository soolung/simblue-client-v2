export type LOGIN_AUTH = {
  email: string;
  password: string;
};

export type RESET_REQUEST = {
  code: string;
  newPassword: string;
  oldPassword: string;
};

export type USER = {
  accessToken: string;
  refreshToken: string;
  authority: string;
  name: string;
  login?: boolean;
};
