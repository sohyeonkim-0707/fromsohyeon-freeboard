import MarKetDetailUI from "./MarketDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./MarketDetail.queris";

export default function MarKetDetail() {
  const router = useRouter();

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });
  // console.log("tya", router.query.productId);

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

  // 📌 구매하기
  // const onClickMoveToBuyProduct = async () => {
  //   router.push("/market")
  // }

  // 📌 장바구니로 이동 및 담기
  const onClickBasket = (el) => () => {
    // router.push("/mycart");
    console.log(el);
    // 1. 기존 장바구니 가져오기
    // const baskets = JSON.parse(localStorage.getItem("baskets") || "[]"); // 지난번까지 담았던 장바구니

    // // 2. 이미 담겼는지 확인하기
    // const temp = baskets.filter((basketEl) => basketEl._id === el._id); // temp 임시로 담아놓는다
    // if (temp.length === 1) {
    //   alert("이미 당신 물품입니다!!!");
    //   return; // 반환하면서 이 함수를 종료
    // }

    // // 3. 장바구니에 담기
    // const { __typename, ...newEl } = el;
    // baskets.push(newEl);
    // localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <MarKetDetailUI
      data={data}
      onClickMoveToProductEdit={onClickMoveToProductEdit}
      onClickDeleteProduct={onClickDeleteProduct}
      onClickMoveToProductList={onClickMoveToProductList}
      onClickBasket={onClickBasket}
    />
  );
}
