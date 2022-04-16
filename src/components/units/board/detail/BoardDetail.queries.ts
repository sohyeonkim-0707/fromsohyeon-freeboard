import { gql } from "@apollo/client";

// 불로오기
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
      createdAt
    }
  }
`;

// 삭제
export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

// 좋아요
export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

// 싫어요
export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;
