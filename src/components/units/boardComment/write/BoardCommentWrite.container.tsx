// 댓글 등록하기 container

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";

export default function BoardCommentWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  // 별 초기값 0
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
  }
  // 별 왜 value 가 들어오냐? 이 온체인지는 html 인풋테그의 그런 온체인지가 아님. antd 디자이너가 만든 기능일 뿐 클릭하면 위 value 라는 값이 들어옴
  function onChangeStar(value: number) {
    setStar(value);
  }

  // 댓글 등록하기 버튼을 눌렀을 때 실행되는 함수
  async function onClickWrite() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
          boardId: String(router.query.boardId),
        },
        // 등록된 댓글 불러 오기
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            // 어떤 게시글에 댓글이 달려야하는지 필요하기에 댓글의 id가 필요
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      // 등록후 input칸 빈칸
      setWriter("");
      setPassword("");
      setContents("");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onChangeStar={onChangeStar}
      writer={writer}
      password={password}
      contents={contents}
    />
  );
}
