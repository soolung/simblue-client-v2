import { useMutation, useQuery } from "react-query";
import { getApplicationDetail, replyApplication } from "../../apis/application";
import { GET_APPLICATION_DETAIL } from "../../constants/keys/application.key";
import { APPLICATION_DETAIL, REQUEST } from "../../types/application.type";

interface PropsType {
  id: number;
  request: REQUEST;
}

export const ApplicationDetailFeature = ({ id, request }: PropsType) => {
  const { data } = useQuery<APPLICATION_DETAIL>([GET_APPLICATION_DETAIL], () =>
    getApplicationDetail(id)
  );

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
    if (
      request.length === data?.questionList.length &&
      !request.find(
        (r) => r.replyDetailList.length < 1 || r.replyDetailList[0] === ""
      )
    ) {
      mutate({ applicationId: id, replyList: request });
    } else console.log("다 입력 안 됨");
  };

  return { reply, data };
};
