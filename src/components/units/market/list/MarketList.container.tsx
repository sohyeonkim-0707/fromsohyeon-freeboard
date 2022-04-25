import MarketListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS } from "./MarketList.queries";

export default function MarketList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {});

  // 📌  무한스크롤
  const onLoadMore = () => {
    if (!data) return; // 데이터가 없으면 스크롤 실행 방지

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      // 페이지는 전체댓글 갯수에 1페이지 10개니까 10으로 나눈 뒤 올림을 해줘야 전체 페이지 개수를 알 수 있음
      updateQuery: (prev, { fetchMoreResult }) => {
        // 이전 (현재 표출 중인) 데이터 + 다음 표출 데이터
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] }; // 다음 표출될 데이터 없을 경우 표출될 상황 만약 개수가 없다면 기존 페치보드만 넣어줘
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ], // 이전의 10개를 뿌리고, 추가로 받은 10개를 붙여서 fetchBoard를 업데이트
        }; // 이전 데이터와 다음 데이터 함께 표출(스프레드 연산자)
      },
    });
  };

  // 📌 해당 상품으로 이동
  const onClickMoveToProduct = (event) => {
    // alert(event.target.id); 값나오는지 찍어보기
    router.push(`/market/${event.target.id}`);
  };

  // 📌 상품등록하기
  const onClickMovetoNewProduct = () => {
    router.push("/market/new");
  };

  return (
    <MarketListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickMovetoNewProduct={onClickMovetoNewProduct}
      onClickMoveToProduct={onClickMoveToProduct}
    />
  );
}
