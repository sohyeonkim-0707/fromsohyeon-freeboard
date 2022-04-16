// 댓글 등록하기 container

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import {
  IBoardCommentWriteProps,
  IUpdateBoardCommentInput,
} from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0); // 별 초기값 0

  // 뎃글 등록하기
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  // 댓글 수정하기
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

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

  // 댓글 등록하기 !!!!!!!!!!!!!! 버튼을 눌렀을 때 실행되는 함수 ====================
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

  // 댓글 수정하기 !!!!!!!!!!!!!! ====================
  async function onClickUpdate() {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      // if (!props.el?._id) return;
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (star !== props.el.rating) updateBoardCommentInput.rating = star;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id, // 이게 뭐지
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            // 어떤 게시글에 댓글이 달려야하는지 필요하기에 댓글의 id가 필요
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeStar={onChangeStar}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
    />
  );
}
