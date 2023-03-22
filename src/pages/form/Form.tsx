import * as S from "./Form.style";
import Text from "../../components/shared/Text/Text";
import TextBox from "../../components/shared/TextBox/TextBox";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import React, { useState } from "react";
import { now } from "../../utils/common/getTimeDiff";
import DateBox from "../../components/shared/Date/DateBox";
import Toggle from "../../components/shared/Toggle/Toggle";
import Check from "../../components/shared/Check/Check";

export const Form = ({ mode }: any) => {
  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState(false);

  const [request, setRequest] = useState({
    emoji: "😎",
    isAlways: false,
    title: "",
    description: "",
    allowsDuplication: false,
    allowsUpdatingReply: false,
    startDate: now(),
    endDate: now(),
  });

  const emojiChange = (e: any) => {
    setRequest({
      ...request,
      emoji: e.emoji,
    });

    setEmojiPickerIsOpen(false);
  };

  const handleChange = (e: any) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <DateBox
        initialDate={request?.endDate ?? now()}
        isAlways={request?.isAlways}
        handleDate={(d) => setRequest({ ...request, endDate: d })}
      />
      <Text
        placeholder="설명"
        name="description"
        onChange={handleChange}
        value={request?.description}
      />
      <Check
        label="상시"
        isChecked={request?.isAlways}
        onChange={() =>
          setRequest({ ...request, isAlways: !request?.isAlways })
        }
      />
      <Toggle
        value={request.allowsDuplication}
        onClick={() => {
          setRequest({
            ...request,
            allowsDuplication: !request.allowsDuplication,
          });
        }}
        label={""}
      />
    </>
  );
};
