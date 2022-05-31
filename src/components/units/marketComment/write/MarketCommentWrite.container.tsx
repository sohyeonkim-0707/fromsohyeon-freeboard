import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useEffect } from "react";
import { CREATE_USED_ITEM_QUESTION } from "./MarketCommentWrite.queries";
import {
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "../list/MarketCommentList.queries";

// yup
const schema = yup.object({
  contents: yup
    .string()
    .max(100, "최대 100글자까지 가능합니다.")
    .required("내용을 입력해주세요"),
});

const MarketCommentWrite = (props) => {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const { register, handleSubmit, formState, watch, setValue, reset } = useForm(
    {
      resolver: yupResolver(schema),
      mode: "onChange", // 실시간 유효성 검사
    }
  );

  // watch 함수를 사용하면 다음과 유저가 입력하는 값을 실시간으로 보여준다.
  const contentsLength = watch().contents?.length;

  // 📌 댓글 등록하기
  const onClickComment = async (data) => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: String(router.query.productId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.productId) },
          },
        ],
      });
      Modal.success({ content: "댓글이 등록되었습니다." });
      setValue("contents", "");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "댓글이 등록되지 않았습니다." });
    }
  };

  // 📌 댓글 수정하기
  const onClickUpdateComment = async (data) => {
    try {
      if (!props.el?._id) return;
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId: String(props.el._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.productId) },
          },
        ],
      });
      Modal.success({ content: "댓글이 수정되었습니다." });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "수정되지 않았습니다." });
    }
  };

  useEffect(() => {
    reset({
      contents: props.data?.fetchUseditem.contents,
    });
  }, []);

  return (
    <MarketCommentWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickComment={onClickComment}
      contentsLength={contentsLength}
      // 수정
      isEdit={props.isEdit}
      onClickUpdateComment={onClickUpdateComment}
      el={props.el}
    />
  );
};
export default MarketCommentWrite;
