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
  // λ΅κΈ
  const [isAnswer, setIsAnswer] = useState(false);

  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: useditemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

  // π μ­μ νκΈ°
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
        Modal.error({ content: "μ­μ κ° μλ£λμ§ μμμ΅λλ€." });
    }
  };

  // π μμ νκΈ°
  const onClickUpdateComment = () => {
    setIsEdit((prev) => !prev);
  };

  // π λ΅κΈλ¬κΈ°
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
                {/* seller id κ°κ³Ό μ μ λ°μ΄ν° id κ°μ κ²½μ° λ΅κΈλ±λ‘? */}
                {useditemData?.fetchUseditem.seller._id ===
                  loginData?.fetchUserLoggedIn._id && (
                  <S.AnswerButton onClick={onClickAnswer}>
                    λ΅κΈλ±λ‘
                  </S.AnswerButton>
                )}
                {/* μμ νκΈ° */}
                <S.UpdateIconButton onClick={onClickUpdateComment}>
                  <S.EditIcon />
                </S.UpdateIconButton>
                {/* μ­μ νκΈ° */}
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
