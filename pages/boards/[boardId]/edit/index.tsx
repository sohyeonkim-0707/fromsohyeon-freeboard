// 수정하기 페이지
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// 페치가 여기에 있는 이유는 기존의 글과 제목, 콘텐츠를 보여주기 위헤 defaultvalue 사용하려고
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function BoardsEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  // isEdit 수정하기 true or 등록하기
  return <BoardWrite isEdit={true} data={data} />;
}
