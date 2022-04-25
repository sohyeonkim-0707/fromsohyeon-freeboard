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
  // 📌 장바구니

  return (
    <MarKetDetailUI
      data={data}
      onClickMoveToProductEdit={onClickMoveToProductEdit}
      onClickDeleteProduct={onClickDeleteProduct}
    />
  );
}
