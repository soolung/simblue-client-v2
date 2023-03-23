import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { addNotice, deleteNotice, toggleNoticePin } from "../../apis/notice";
import { GET_APPLICATION_RESULT } from "../../constants/keys/application.key";

export const NoticeFeature = (id: number, notice?: string, setNotice?: React.Dispatch<React.SetStateAction<string>>) => {
  const queryClient = useQueryClient();
  const reload = () => queryClient.invalidateQueries([GET_APPLICATION_RESULT]);

  const makeNotice = useMutation(() => addNotice(id, notice), {
    onSuccess: () => {
      reload();
      setNotice && setNotice("");
    },
  });

  const togglePin = useMutation(() => toggleNoticePin(id), {
    onSuccess: reload,
  });

  const removeNotice = useMutation(() => deleteNotice(id), {
    onSuccess: reload,
  });
  return { togglePin, removeNotice, makeNotice };
};
