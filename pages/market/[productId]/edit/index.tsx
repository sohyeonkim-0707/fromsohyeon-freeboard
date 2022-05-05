// 상품 수정하기
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      createdAt
      images
      pickedCount
      useditemAddress {
        address
        addressDetail
      }
      seller {
        name
      }
    }
  }
`;

export default function ProductNewPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  return <MarketWrite isEdit={true} data={data} />;
}
