// 게시글 등록하기 페이지
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function BoardsNewPage() {
  // isEdit 등록하기 false or 수정하기 true
  return <BoardWrite isEdit={false} />;
}
