import server from "../utils/axios/server";
import { authorization } from "../utils/config/authorization";

export interface StudentInfo {
  admissionYear: number;
  name: string;
  password: string;
  passwordCheck: string;
  email: string;
  studentNumber: number;
}
export const joinStudent = async ({
  admissionYear,
  name,
  password,
  studentNumber,
}: StudentInfo) => {
  return await server.post(
    "/user/student",
    {
      admissionYear: admissionYear,
      name: name,
      password: password,
      studentNumber: studentNumber,
    },
    authorization()
  );
};

export const joinTeacher = async ({ name, password }: StudentInfo) => {
  return await server.post(
    "/user/teacher",
    {
      name: name,
      password: password,
    },
    authorization()
  );
};
