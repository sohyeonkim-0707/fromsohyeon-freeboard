import AnswerListUI from "./MarketAnswerList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./MarketAnswerList.queries";

export default function AnswerList(props) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: String(props?.id) },
  });

  return <AnswerListUI data={data} questionId={props.id} />;
}
