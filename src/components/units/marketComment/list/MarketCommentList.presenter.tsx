import MarketCommentListItemUI from "./MarketCommentList.presenterItem";
import * as S from "./MarketCommentList.styles";
import { v4 as uuidv4 } from "uuid";

const MarketCommentListUI = (props) => {
  return (
    <S.Wrapper>
      {props.data?.fetchUseditemQuestions.map(
        (el: any) =>
          (
            <MarketCommentListItemUI
              key={uuidv4()}
              el={el}
              id={el._id} // 📌 id 넘어가기 시작
              data={props.data}
            />
          ) || <div></div>
      )}
    </S.Wrapper>
  );
};
export default MarketCommentListUI;
