export interface LoginAuth {
  email: string;
  password: string;
}
export interface ResetPassword {
  code: string;
  newPassword: string;
  oldPassword: string;
}
