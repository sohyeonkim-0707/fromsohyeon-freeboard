import * as S from "./MarketCommentList.styles";
import { Modal } from "antd";
import { useMutation, useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import { FETCH_USED_ITEM } from "../../market/detail/MarketDetail.queris";
import MarketCommentAnswer from "../answer/MarketAnswer.container";
import AnswerList from "../answerList/MarketAnswerList.container";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./MarketCommentList.queries";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

const MarketCommentListItemUI = (props) => {
  const router = useRouter();

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const [isEdit, setIsEdit] = useState(false);
  // 답글
  const [isAnswer, setIsAnswer] = useState(false);

  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: useditemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

  // 📌 삭제하기
  const onClickDeleteComment = async (event) => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: String(event.currentTarget.id) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.productId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "삭제가 완료되지 않았습니다." });
    }
  };

  // 📌 수정하기
  const onClickUpdateComment = () => {
    setIsEdit((prev) => !prev);
  };

  // 📌 답글달기
  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
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
                {/* seller id 값과 유저데이터 id 같을 경우 답글등록? */}
                {useditemData?.fetchUseditem.seller._id ===
                  loginData?.fetchUserLoggedIn._id && (
                  <S.AnswerButton onClick={onClickAnswer}>
                    답글등록
                  </S.AnswerButton>
                )}
                {/* 수정하기 */}
                <S.UpdateIconButton onClick={onClickUpdateComment}>
                  <S.EditIcon />
                </S.UpdateIconButton>
                {/* 삭제하기 */}
                <S.DeleteIconButton
                  id={props.id}
                  onClick={onClickDeleteComment}
                >
                  <S.DeleteIcon />
                </S.DeleteIconButton>
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
        <MarketCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
      {isAnswer && (
        <MarketCommentAnswer setIsAnswer={setIsAnswer} id={props.id} />
      )}
      <AnswerList id={props.id} />
    </>
  );
};
export default MarketCommentListItemUI;
