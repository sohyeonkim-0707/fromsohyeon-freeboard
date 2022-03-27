// 상세페이지
// 댓글 등록 컴포넌트 BoardCommetWrite
// 댓글 목록 컴포넌트 BoardCommetList
import { useRouter } from "next/router";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

export default function BoardDetailPage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </div>
  );
}
