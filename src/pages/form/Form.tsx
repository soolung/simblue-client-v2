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

  return (
    <>
      <section className="form-section">
        <div className="form-header">
          <div className="form-header-top">
            <div className="form-header-left">
              <div className="form-header-left-emoji">
                <input
                  className="form-header-left-emoji-input emoji"
                  type="text"
                  name="emoji"
                  value={request?.emoji}
                  onClick={() => setEmojiPickerIsOpen(true)}
                  readOnly={true}
                />
                {emojiPickerIsOpen && (
                  <EmojiPicker
                    onEmojiClick={emojiChange}
                    emojiStyle={EmojiStyle.NATIVE}
                    width="30vw"
                  />
                )}
              </div>
              <Text
                className="form-header-left-title"
                placeholder="제목"
                name="title"
                value={request?.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-header-right-date-wrapper">
              <div className="form-header-right-date">
                <div className="form-header-right-date-top">
                  <span>기간</span>
                  <DateBox
                    initialDate={request?.startDate ?? now()}
                    isAlways={request?.isAlways}
                    handleDate={(d) => setRequest({ ...request, startDate: d })}
                  />
                  <Check
                    labelClassName="always-label"
                    className="always-button"
                    label="상시"
                    isChecked={request?.isAlways}
                    onChange={() =>
                      setRequest({ ...request, isAlways: !request?.isAlways })
                    }
                  />
                </div>
                <div className="form-header-right-date-bottom">
                  <span>~</span>
                  <DateBox
                    initialDate={request?.endDate ?? now()}
                    isAlways={request?.isAlways}
                    handleDate={(d) => setRequest({ ...request, endDate: d })}
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="form-header-description"
            placeholder="설명"
            name="description"
            onChange={handleChange}
            value={request?.description}
          />
        </div>
        <div className="form-question-section">
          {questionList?.map((q, index) => (
            <Question
              question={q}
              handleQuestionChange={handleQuestionChange}
              deleteQuestion={deleteQuestion}
              key={index}
              index={index}
              addAnswer={addAnswer}
              addNextAnswer={addNextAnswer}
              handleAnswer={handleAnswer}
              deleteAnswer={deleteAnswer}
              toggleIsRequired={toggleIsRequired}
              copyQuestion={copyQuestion}
            />
          ))}
          <button className="add-question-button" onClick={addQuestion}>
            <span>+</span>
          </button>
        </div>
        <div className="button-area">
          <Button
            className="advanced-setting-button"
            text="고급 설정"
            action={() => setAdvancedSettingModalOpen(true)}
          />
          <Button
            className="form-button"
            text={button().text}
            disabled={button().disabled}
            action={onClick}
          />
        </div>
      </section>
      <AdvancedSettingModal
        id={id}
        mode={mode}
        isOpen={advancedSettingModalIsOpen}
        data={advancedSettingModalData}
        closeModal={() => setAdvancedSettingModalOpen(false)}
        request={request}
        ownerList={ownerList}
        addOwner={addOwner}
        deleteOwner={deleteOwner}
      />
    </>
  );
};
