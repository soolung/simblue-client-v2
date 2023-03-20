import { authorization } from "../../utils/auth";
import server from "../client";

export const addNotice = async (applicationId: number, notice: string) => {
  return await server.post(
    "/notice",
    {
      applicationId: applicationId,
      notice: notice,
    },
    authorization()
  );
};

export const toggleNoticePin = async (id: number) => {
  return await server.put(`/notice/${id}/pinned`, authorization());
};

export const deleteNotice = async (id: number) => {
  return await server.delete(`/notice/${id}`, authorization());
};
