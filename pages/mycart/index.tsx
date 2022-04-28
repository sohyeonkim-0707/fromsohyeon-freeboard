// 장바구니 보여주기
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
`;

const ProductWrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
  /* border: 1px solid gray; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
  :hover {
    background: lightgray;
  }
`;
const MyColumn = styled.div`
  width: 200px;
  height: 50px;
  line-height: 50px;
  border: 1px solid lightgray;
  text-align: center;
  

  }
`;
// const MyProductImage = styled.img`
//   width: 200px;
//   height: 200px;
//   border: 1px solid lightgray;
// `;

const Total = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid lightgray;

  div {
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    margin-top: 20px;
  }
`;

const BuyButton = styled.button`
  width: 300px;
  height: 70px;
  background: white;
  cursor: pointer;
  margin-top: 500px;
  border: 1px solid lightgray;
  /* margin-bottom: 100px; */
  :hover {
    background: orange;
    border: none;
  }
`;

export default function MyCartPage() {
  const [myBasketItems, setMyBasketItems] = useState([]);

  useEffect(() => {
    const mybaskets = JSON.parse(localStorage.getItem("mybaskets") || "[]");
    setMyBasketItems(mybaskets);
  }, []); // 마운트가 다 되고 한 번 실행됨
  // console.log(myBasketItems); 아이템들어오는지 찍어봐 ... 킹받네 ...

  return (
    <Wrapper>
      <Title>Shopping Cart</Title>
      <ProductWrapper>
        <div>
          <MyRow>
            <MyColumn style={{ background: "orange" }}>상품번호</MyColumn>
            <MyColumn style={{ background: "orange" }}>상품명</MyColumn>
            {/* <MyColumn style={{ background: "orange" }}>사진</MyColumn> */}
            <MyColumn style={{ background: "orange" }}>한줄요약</MyColumn>
            <MyColumn style={{ background: "orange" }}>가격</MyColumn>
          </MyRow>

          {myBasketItems.map((el: any) => (
            <MyRow key={uuidv4()}>
              <MyColumn>
                {String(el.fetchUseditem._id).slice(-4).toUpperCase()}
              </MyColumn>
              <MyColumn>{el.fetchUseditem.name}</MyColumn>
              {/* {el.fetchUseditem.images[0] ? (
                <MyProductImage
                  src={`https://storage.googleapis.com/${el.fetchUseditem.images}`}
                  alt="상품이미지"
                />
              ) : (
                <MyProductImage src="/images/images.png" />
              )} */}

              <MyColumn>{el.fetchUseditem.remarks}</MyColumn>
              <MyColumn>{el.fetchUseditem.price}</MyColumn>
            </MyRow>
          ))}
        </div>
        <Total>
          <div>
            <div>총 상품금액</div>
            <BuyButton>구매하기</BuyButton>
          </div>
        </Total>
      </ProductWrapper>
    </Wrapper>
  );
}
