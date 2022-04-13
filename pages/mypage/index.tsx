import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/components/commons/hocs";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return <div> {data?.fetchUserLoggedIn.name}님의 mypage 입니다.</div>;
}

export default withAuth(MyPage);
