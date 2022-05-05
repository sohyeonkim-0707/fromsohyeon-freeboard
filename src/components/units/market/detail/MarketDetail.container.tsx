import MarKetDetailUI from "./MarketDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  TOGGLE_USED_ITEM_PICK,
} from "./MarketDetail.queris";
import { useState } from "react";

export default function MarKetDetail() {
  const router = useRouter();

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [isWishAdd, setIsWishAdd] = useState(false);

  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });
  // console.log("tya", router.query.productId);

  // 📌 찜하기 mutation
  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  // 📌 수정하기 페이지로 이동
  const onClickMoveToProductEdit = () => {
    router.push(`/market/${router.query.productId}/edit`);
  };

  // 📌 삭제하기
  const onClickDeleteProduct = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.productId },
      });
      alert("삭제가 완료되었습니다.");
      router.push("/market");
    } catch (error) {
      alert(error.message);
    }
  };

  // 📌 목록으로 이동
  const onClickMoveToProductList = () => {
    router.push("/market");
  };

  // 📌 장바구니 담기
  const onClickBasket = (el) => () => {
    console.log(el); // el 잘 들어오는지 확인
    // 1. 기존 장바구니 가져오기
    const mybaskets = JSON.parse(localStorage.getItem("mybaskets") || "[]"); // 지난번까지 담았던 장바구니

    // 2. 이미 담겼는지 확인하기
    // const temp = mybaskets.filter((basketEl: any) => basketEl._id === el._id); // temp 임시로 담아놓는다
    // if (temp.length === 1) {
    //   alert("이미 장바구니에 담겨 있습니다!");
    //   return;
    // }

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    mybaskets.push(newEl);
    localStorage.setItem("mybaskets", JSON.stringify(mybaskets));
  };

  // 📌 구매하기
  const onClickMoveToBuyProduct = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.productId },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  // 📌 찜하기 버튼 누를 때마다 boolean 값 변경
  const wishAddHandler = () => {
    if (!isWishAdd) {
      setIsWishAdd(!isWishAdd);
      alert("찜 되었습니다.");
    }
  };

  // 📌 찜하기
  const wishCountHandler = async () => {
    try {
      await toggleUsedItemPick({
        variables: { useditemId: String(router.query.productId) },
      });
      refetch();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MarKetDetailUI
      data={data}
      onClickMoveToProductEdit={onClickMoveToProductEdit}
      onClickDeleteProduct={onClickDeleteProduct}
      onClickMoveToProductList={onClickMoveToProductList}
      onClickBasket={onClickBasket}
      onClickMoveToBuyProduct={onClickMoveToBuyProduct}
      wishCountHandler={wishCountHandler}
      wishAddHandler={wishAddHandler}
      isWishAdd={isWishAdd}
    />
  );
}
