import { gql, useQuery } from "@apollo/client";
// import { withAuth } from "../../src/components/commons/hocs";
import { useAuth } from "../../src/components/commons/hooks";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function MyPage() {
  useAuth();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return <div> {data?.fetchUserLoggedIn.name}님의 mypage 입니다.</div>;
}

export default MyPage;
