import RecentWatchBox from "../../src/components/units/board/list/recentwatchbox";
import MarketList from "../../src/components/units/market/list/MarketList.container";

// 상품 목록페이지
export default function MarketListPage() {
  return (
    <>
      <MarketList />
      <RecentWatchBox />
    </>
  );
}
