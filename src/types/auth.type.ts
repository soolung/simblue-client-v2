export type LOGIN_AUTH = {
  email: string;
  password: string;
};

export type SignAuth = {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
  studentNumber: string;
};

export type RESET_REQUEST = {
  code: string;
  newPassword: string;
  oldPassword: string;
};

export type USER = {
  accessToken: string;
  refreshToken: string;
  login?: boolean;
};
