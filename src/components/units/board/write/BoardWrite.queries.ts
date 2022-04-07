import { gql } from "@apollo/client";

// 요청할 값이 정해져 있지 않기 때문에 요청할 값과 데이터타입과 $표시 해줌
// 데이터 타입에 대한 정의를 해줘야 하기 때문에 한줄 추가
// _id 는 꼭 받아야하는 값
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: ID!
    $password: String
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(
      boardId: $boardId
      password: $password
      updateBoardInput: $updateBoardInput
    ) {
      _id
    }
  }
`;
