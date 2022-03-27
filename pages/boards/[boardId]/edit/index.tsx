// 수정하기 페이지
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function BoardsEditPage() {
  const router = useRouter();

  // 게시글 수정하기에 기존등록데이터 남아있게 하기
  // useQuery 기능을 이용해 data 를 선언해준다.
  // variables는 boardId 를 이용해 넣어준다.
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
