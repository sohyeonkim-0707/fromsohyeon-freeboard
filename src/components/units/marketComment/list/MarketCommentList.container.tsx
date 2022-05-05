import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import MarketCommentListUI from "./MarketCommentList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./MarketCommentList.queries";

const MarketCommentList = () => {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.productId) },
  });

  return <MarketCommentListUI data={data} fetchMore={fetchMore} />;
};
export default MarketCommentList;
