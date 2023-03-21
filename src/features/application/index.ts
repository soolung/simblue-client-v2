import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getApplicationDetail, getApplicationResult, replyApplication } from "../../apis/application";
import { GET_APPLICATION_DETAIL, GET_APPLICATION_RESULT } from "../../constants/keys/application.key";
import { REQUEST, APPLICATION_DETAIL } from "../../types/application.type";

export const ApplicationDetailFeature = (request?: REQUEST) => {
  const { applicationId } = useParams();
  const id = Number(applicationId);
  const location = window.location.pathname.split("/")[3] === "manage";

  const { data } = useQuery<APPLICATION_DETAIL>([location ? GET_APPLICATION_RESULT : GET_APPLICATION_DETAIL], () => {
    if (location) return getApplicationResult(id);
    else return getApplicationDetail(id);
  });

  const { mutate } = useMutation(replyApplication, {
    onSuccess: () => {
      alert("성공!");
      window.location.href = "/";
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const errMessage = err.response.data.message;
      alert(errMessage);
    },
  });

  const reply = () => {
    if (request?.length === data?.questionList.length && !request?.find((r) => r.replyDetailList.length < 1 || r.replyDetailList[0] === "")) {
      mutate({ applicationId: id, replyList: request });
    } else console.log("다 입력 안 됨"); // 심청이 alert 만들어서 넣기
  };

  return { reply, data, location };
};
