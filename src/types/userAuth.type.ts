export interface LoginAuth {
  email: string;
  password: string;
}

export interface ResetPassword {
  code: string;
  newPassword: string;
  oldPassword: string;
}

export interface SignAuth {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
  studentNumber: string;
}
