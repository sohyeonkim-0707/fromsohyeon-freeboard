import ProductItemListItem from "./MarketList.presenteritem";
import RecentWatchBox from "./recentwatchproduct";
import { Scroll } from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";
// import { v4 as uuidv4 } from "uuid"; 403 에러 남

const Wrapper = styled.div`
  width: 1300px;
  height: 730px;
  /* border: 1px solid red; */
  margin: 50px auto;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProductButton = styled.button`
  width: 124px;
  height: 52px;
  background: #ffffff;
  border: none;
  margin-top: 40px;
  margin-left: 45px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  background: #ffe004;
`;

export default function MarketListUI(props) {
  if (!props.data) return <div />;

  return (
    <ProductWrapper>
      <Wrapper>
        <Scroll>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <ProductItemListItem
                key={el._id}
                el={el}
                onClickMoveToProduct={props.onClickMoveToProduct}
              /> // 📌  el 내려가기 시작
            ))}
          </InfiniteScroll>
        </Scroll>
        <ProductButton onClick={props.onClickMovetoNewProduct}>
          상품 등록하기
        </ProductButton>
      </Wrapper>
      {/* 오늘본상품 */}
      <RecentWatchBox />
    </ProductWrapper>
  );
}
