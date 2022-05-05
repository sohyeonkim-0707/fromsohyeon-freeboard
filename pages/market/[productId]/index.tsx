// 상품 조회 (상세페이지)
import MarKetDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import MarketCommentWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";
import MarketCommentList from "../../../src/components/units/marketComment/list/MarketCommentList.container";

export default function MarketDetailPage() {
  return (
    <>
      <MarKetDetail />
      <MarketCommentWrite />
      <MarketCommentList />
    </>
  );
}
