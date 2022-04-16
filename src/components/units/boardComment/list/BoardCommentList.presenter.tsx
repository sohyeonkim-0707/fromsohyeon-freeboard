// 댓글 목록
import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import { Scroll } from "./BoardCommentList.styles";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  if (!props.data) return <div />;
  return (
    <Scroll>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListUIItem key={el._id} el={el} /> // el 내려가기 시작 !!!!
        ))}
      </InfiniteScroll>
    </Scroll>
  );
}
