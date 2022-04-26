import MarketListUI from "./MarketList.presenter";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import { useEffect, useState } from "react";

export default function MarketList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {});
  // const [isToday, setIsToday] = useState([]);

  // // 날짜 함수
  // const getDate = new Date();
  // const yyyy = getDate.getFullYear();
  // const mm = getDate.getMonth() + 1;
  // const dd = getDate.getDay();
  // const today = `${yyyy}-${mm}-${dd}`;

  // useEffect(() => {
  //   const todayProduct = JSON.parse(localStorage.getItem(today) || "[]");
  //   setIsToday(todayProduct);
  // }, []);

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

  // 📌 해당 상품으로 이동 & 오늘 본 상품
  const onClickMoveToProduct = (el) => (event) => {
    router.push(`/market/${event.currentTarget.id}`);

    // 로컬에 이미 있는 값인지 체크
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });

    if (isExists) {
      return;
    }
    // 얕은 복사를 해서 넣어주기, 최근 본 상품 3개까지만 넣어줄 것이기 때문에 shift() 이용해서 3개 이상 추가되면 끝에 값을 빼고 새 값을 넣ㄴ
    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);
    if (baskets.length > 3) {
      baskets.shift();
    }
    localStorage.setItem("baskets", JSON.stringify(baskets));
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
      // onClickBasket={onClickBasket} // 장바구니
      // isToday={isToday} // 오늘 본 상품
    />
  );
}
