export interface ResetPassword {
  code: string;
  newPassword: string;
  oldPassword: string;
}

export interface AuthInfo {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
  studentNumber: string;
}
