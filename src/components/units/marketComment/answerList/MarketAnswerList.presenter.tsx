import AnswerListItemUI from "./MarketAnswerList.presenterItem";
import * as S from "./MarketAnswerList.styles";

export default function AnswerListUI(props) {
  return (
    <S.Wrapper>
      {props.data?.fetchUseditemQuestionAnswers.map(
        (el) =>
          (
            <AnswerListItemUI
              key={el._id}
              el={el}
              id={el._id}
              data={props.data}
              questionId={props.questionId}
            />
          ) || <div></div>
      )}
    </S.Wrapper>
  );
}
