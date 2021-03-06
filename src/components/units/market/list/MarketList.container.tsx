import MarketListUI from "./MarketList.presenter";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import { useEffect, useState } from "react";

export default function MarketList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {});

  // ๐  ๋ฌดํ์คํฌ๋กค
  const onLoadMore = () => {
    if (!data) return; // ๋ฐ์ดํฐ๊ฐ ์์ผ๋ฉด ์คํฌ๋กค ์คํ ๋ฐฉ์ง

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      // ํ์ด์ง๋ ์ ์ฒด๋๊ธ ๊ฐฏ์์ 1ํ์ด์ง 10๊ฐ๋๊น 10์ผ๋ก ๋๋ ๋ค ์ฌ๋ฆผ์ ํด์ค์ผ ์ ์ฒด ํ์ด์ง ๊ฐ์๋ฅผ ์ ์ ์์
      updateQuery: (prev, { fetchMoreResult }) => {
        // ์ด์  (ํ์ฌ ํ์ถ ์ค์ธ) ๋ฐ์ดํฐ + ๋ค์ ํ์ถ ๋ฐ์ดํฐ
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] }; // ๋ค์ ํ์ถ๋  ๋ฐ์ดํฐ ์์ ๊ฒฝ์ฐ ํ์ถ๋  ์ํฉ ๋ง์ฝ ๊ฐ์๊ฐ ์๋ค๋ฉด ๊ธฐ์กด ํ์น๋ณด๋๋ง ๋ฃ์ด์ค
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ], // ์ด์ ์ 10๊ฐ๋ฅผ ๋ฟ๋ฆฌ๊ณ , ์ถ๊ฐ๋ก ๋ฐ์ 10๊ฐ๋ฅผ ๋ถ์ฌ์ fetchBoard๋ฅผ ์๋ฐ์ดํธ
        }; // ์ด์  ๋ฐ์ดํฐ์ ๋ค์ ๋ฐ์ดํฐ ํจ๊ป ํ์ถ(์คํ๋ ๋ ์ฐ์ฐ์)
      },
    });
  };

  // ๐ ํด๋น ์ํ์ผ๋ก ์ด๋ & ๐  ์ค๋ ๋ณธ ์ํ
  const onClickMoveToProduct = (el) => (event) => {
    router.push(`/market/${event.currentTarget.id}`);

    // ๋ก์ปฌ์ ์ด๋ฏธ ์๋ ๊ฐ์ธ์ง ์ฒดํฌ
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });

    if (isExists) {
      return;
    }
    // ์์ ๋ณต์ฌ๋ฅผ ํด์ ๋ฃ์ด์ฃผ๊ธฐ, ์ต๊ทผ ๋ณธ ์ํ 3๊ฐ๊น์ง๋ง ๋ฃ์ด์ค ๊ฒ์ด๊ธฐ ๋๋ฌธ์ shift() ์ด์ฉํด์ 3๊ฐ ์ด์ ์ถ๊ฐ๋๋ฉด ๋์ ๊ฐ์ ๋นผ๊ณ  ์ ๊ฐ์ ๋ฃใด
    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);
    if (baskets.length > 3) {
      baskets.shift();
    }
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  // ๐ ์ํ๋ฑ๋กํ๊ธฐ
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
