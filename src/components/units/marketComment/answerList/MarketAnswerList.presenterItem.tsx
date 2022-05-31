import MarketCommentAnswer from "../answer/MarketAnswer.container";
import * as S from "./MarketAnswerList.styles";
import { Modal } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./MarketAnswerList.queries";

export default function AnswerListItemUI(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  // 📌 답글 수정하기
  const onClickUpdateAnswer = () => {
    setIsEdit((prev) => !prev);
  };

  // 📌 답글 삭제하기
  const onClickDeleteAnswer = async (event) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: { useditemQuestionAnswerId: String(event.currentTarget.id) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props?.questionId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {!isEdit && (
        <S.CommentFetchWrapper>
          <S.CommentProfileImg src="/images/avatar.png" />
          <S.CommentContentsBox>
            <S.CommentFetchHeader>
              <S.CommentWriter>{props.el?.user.name}</S.CommentWriter>
              <div>
                <S.EditIcon onClick={onClickUpdateAnswer}>
                  <S.EditIcon />
                </S.EditIcon>
                <S.DeleteIcon id={props.id} onClick={onClickDeleteAnswer}>
                  <S.DeleteIcon />
                </S.DeleteIcon>
              </div>
            </S.CommentFetchHeader>
            <S.CommentContents>{props.el?.contents}</S.CommentContents>
            <S.CommentCreatedAt>
              {getDate(props.el?.createdAt)}
            </S.CommentCreatedAt>
          </S.CommentContentsBox>
        </S.CommentFetchWrapper>
      )}
      {/* 답글등록하기 반복 */}
      {isEdit && (
        <MarketCommentAnswer
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
          id={props.id}
        />
      )}
    </>
  );
}
