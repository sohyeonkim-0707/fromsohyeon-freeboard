import MarKetDetailUI from "./MarketDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_USED_ITEM } from "./MarketDetail.queris";

export default function MarKetDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });
  // console.log("tya", router.query.productId);

  const onClickMoveToProductEdit = () => {
    router.push(`/market/${router.query.productId}/edit`);
  };

  return (
    <MarKetDetailUI
      data={data}
      onClickMoveToProductEdit={onClickMoveToProductEdit}
    />
  );
}
