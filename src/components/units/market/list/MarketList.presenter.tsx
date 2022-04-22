import ProductItemListItem from "./MarketList.presenteritem";
import { Scroll } from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketListUI(props) {
  if (!props.data) return <div />;

  return (
    <Scroll>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchUseditems.map((el) => (
          <ProductItemListItem key={el._id} el={el} /> // 📌  el 내려가기 시작
        ))}
      </InfiniteScroll>
    </Scroll>
  );
}
