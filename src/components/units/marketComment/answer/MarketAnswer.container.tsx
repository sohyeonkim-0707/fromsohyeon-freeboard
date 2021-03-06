import MarketCommentAnswerUI from "./MarketAnswer.presenter";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../answerList/MarketAnswerList.queries";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./MarketAnswer.queries";

export default function MarketCommentAnswer(props) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const [contents, setContents] = useState(props.el?.contents || "");
  const [isValid, setIsValid] = useState(false);

  const onChangeContents = (event) => {
    if (event.target.value === "") {
      setIsValid(false);
    } else {
      setContents(event.target.value);
      setIsValid(true);
    }
  };

  // π λ΅κΈ λ±λ‘νκΈ°
  const submitAnswer = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props?.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props?.id },
          },
        ],
      });
      setIsValid(false);
      props.setIsAnswer((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // π λ΅κΈ μμ νκΈ°
  const updateAnswer = async () => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionAnswerId: props?.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props?.id },
          },
        ],
      });
      props.setIsEdit(false);
      Modal.success({ content: "λκΈμ΄ μμ λμμ΅λλ€." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <MarketCommentAnswerUI
      onChangeContents={onChangeContents}
      submitAnswer={submitAnswer}
      updateAnswer={updateAnswer}
      isValid={isValid}
      setIsAnswer={props.setIsAnswer}
      contents={contents}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
