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

  // π μ°νκΈ° mutation
  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  // π μμ νκΈ° νμ΄μ§λ‘ μ΄λ
  const onClickMoveToProductEdit = () => {
    router.push(`/market/${router.query.productId}/edit`);
  };

  // π μ­μ νκΈ°
  const onClickDeleteProduct = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.productId },
      });
      alert("μ­μ κ° μλ£λμμ΅λλ€.");
      router.push("/market");
    } catch (error) {
      alert(error.message);
    }
  };

  // π λͺ©λ‘μΌλ‘ μ΄λ
  const onClickMoveToProductList = () => {
    router.push("/market");
  };

  // π μ₯λ°κ΅¬λ λ΄κΈ°
  const onClickBasket = (el) => () => {
    console.log(el); // el μ λ€μ΄μ€λμ§ νμΈ
    // 1. κΈ°μ‘΄ μ₯λ°κ΅¬λ κ°μ Έμ€κΈ°
    const mybaskets = JSON.parse(localStorage.getItem("mybaskets") || "[]"); // μ§λλ²κΉμ§ λ΄μλ μ₯λ°κ΅¬λ

    // 2. μ΄λ―Έ λ΄κ²Όλμ§ νμΈνκΈ°
    const temp = mybaskets.filter(
      (basketEl: any) => basketEl.fetchUseditem._id === el.fetchUseditem._id
    ); // temp μμλ‘ λ΄μλλλ€
    if (temp.length === 1) {
      alert("μ΄λ―Έ μ₯λ°κ΅¬λμ λ΄κ²¨ μμ΅λλ€!");
      return;
    }

    // 3. μ₯λ°κ΅¬λμ λ΄κΈ°
    const { __typename, ...newEl } = el;
    mybaskets.push(newEl);
    localStorage.setItem("mybaskets", JSON.stringify(mybaskets));
    alert("μ₯λ°κ΅¬λμ λ΄κ²Όμ΅λλ€.");
  };

  // π κ΅¬λ§€νκΈ°
  const onClickMoveToBuyProduct = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.productId },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  // π μ°νκΈ° λ²νΌ λλ₯Ό λλ§λ€ boolean κ° λ³κ²½
  const wishAddHandler = () => {
    if (!isWishAdd) {
      setIsWishAdd(!isWishAdd);
      alert("μ° λμμ΅λλ€.");
    }
  };

  // π μ°νκΈ°
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
