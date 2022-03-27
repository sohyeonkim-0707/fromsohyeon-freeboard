import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  // codegen-query
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );

  // 목록 페이지로 이동
  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  // 수정하기 페이지로 이동
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  // 삭제하기 mutation
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      alert("삭제가 완료되었습니다.");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickDelete={onClickDelete}
    />
  );
}
