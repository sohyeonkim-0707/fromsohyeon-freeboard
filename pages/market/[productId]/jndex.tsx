// 상품 조회 (상세페이지)

import { useRouter } from "next/router";
import { useMutation, gql } from "@apollo/client";
import styled from "@emotion/styled";


const FETCH_USED_ITEM = gql`
  query fetchuseditem($useditemId: ID!) {
    fetchuseditem(useditemId: $useditemId){
      _id
    }
  }
`;



export default function first() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  return <div>상품상세페이지</div>;
}
