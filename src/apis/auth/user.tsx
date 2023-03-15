import server from "../client";
import { authorization } from "../../utils/auth";

interface JoinStudent {
  admissionYear: number;
  name: string;
  password: string;
  studentNumber: string;
}

interface JoinTeacher {
  name: string;
  password: string;
}

export const joinStudent = async ({
  admissionYear,
  name,
  password,
  studentNumber,
}: JoinStudent) => {
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

export const joinTeacher = async ({ name, password }: JoinTeacher) => {
  return await server.post(
    "/user/teacher",
    {
      name: name,
      password: password,
    },
    authorization()
  );
};

export const searchTeacher = async (q: string) => {
  return (await server.get(`/user/teacher/search?q=${q}`, authorization()))
    .data;
};
