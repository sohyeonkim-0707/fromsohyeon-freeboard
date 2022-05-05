import { gql, useMutation, useQuery } from "@apollo/client";
import { useAuth } from "../../src/components/commons/hooks";
import { useState } from "react";
import Head from "next/head";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1200px;
  height: 600px;
  margin: 100px auto;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
`;

const PointWrapper = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  /* border: 1px solid red; */
`;

const SelectPoint = styled.select`
  width: 100%;
  height: 50px;
`;

const WantMoney = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 50px;
  text-align: right;
  font-size: 17px;
`;

const PointButton = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  background: white;
  cursor: pointer;
  border: 1px solid lightgray;
  /* margin-bottom: 100px; */
  :hover {
    background: orange;
    border: none;
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

function MyPage() {
  useAuth();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [amount, setAmount] = useState(0);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChanageSubmit = (event) => {
    setAmount(event.target.value);
  };

  // 📌 충전하기
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 주석하면 랜덤으로 생성됨 상품아이디 (중복되지 않게!)
        name: "포인트 충전하기",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "김소현",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          // rsp 에 뭐가 들어오는지 확인
          console.log(rsp);
          // 백엔드에 결제 관련 데이터 넘겨주기(즉, mutation 실행하기)
          // ex. createPointTransactionOfLoading
          const result = createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          console.log("결제", result);
          alert("결제에 성공했습니다.");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요.");
        }
      }
    );
  };
  return (
    <Wrapper>
      <Title> {data?.fetchUserLoggedIn?.name}님의 Mypage 입니다.</Title>
      <Title>
        현재 포인트는
        {data?.fetchUserLoggedIn?.userPoint?.amount}원 입니다.
      </Title>
      <div>
        <Head>
          {/* <!-- jQuery --> */}
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          {/* <!-- iamport.payment.js --> */}
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          ></script>
        </Head>
        <PointWrapper>
          <SelectPoint onChange={onChanageSubmit}>
            <option value="500">500원</option>
            <option value="1000">1000원</option>
            <option value="2000">1500원</option>
            <option value="5000">2000원</option>
          </SelectPoint>
          <WantMoney>충전하고 싶은 금액: {amount} 원</WantMoney>
          <PointButton onClick={requestPay}>포인트 충전하기</PointButton>
        </PointWrapper>
      </div>
    </Wrapper>
  );
}
export default MyPage;
