import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import MarketCommentAnswer from "../answer/MarketAnswer.container";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./MarketAnswerList.queries";
import * as S from "./MarketAnswerList.styles";

export default function AnswerListItemUI(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  const onClickUpdateAnswer = () => {
    setIsEdit((prev) => !prev);
  };

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
                  {/* <S.UpdateIcon src="/images/update.png" /> */}
                </S.EditIcon>
                <S.DeleteIcon id={props.id} onClick={onClickDeleteAnswer}>
                  {/* <S.DeleteIcon src="/images/delete.png" /> */}
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
