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
              el={el} // el 내려가기 시작
              id={el._id} // id 내려가기 시작
              data={props.data}
              questionId={props.questionId}
            />
          ) || <div></div>
      )}
    </S.Wrapper>
  );
}

// {data?.dd.map((el) => (<div>dddd </div>))}
