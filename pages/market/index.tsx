import RecentWatchBox from "../../src/components/units/board/list/recentwatchbox";
import MarketList from "../../src/components/units/market/list/MarketList.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
`;
// 상품 목록페이지
export default function MarketListPage() {
  return (
    <Wrapper>
      <MarketList />
      <RecentWatchBox />
    </Wrapper>
  );
}
