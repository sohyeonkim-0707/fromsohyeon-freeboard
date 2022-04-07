// 수정하기 페이지
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// 페치가 여기에 있는 이유가? 기존의 글과 제목, 콘텐츠를 보여주기 위헤
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
  // isEdit 수정하기 true or 등록하기
  return <BoardWrite isEdit={true} data={data} />;
}
