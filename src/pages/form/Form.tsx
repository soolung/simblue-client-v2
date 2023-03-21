import * as S from "./Form.style";
import Text from "../../components/shared/Text/Text";
import TextBox from "../../components/shared/TextBox/TextBox";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import React, { useState } from "react";
import { now } from "../../utils/common/getTimeDiff";
import DateBox from "../../components/shared/Date/DateBox";

export const Form = () => {
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

  return <></>;
};
