// 오늘 본 상품
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 196px;
  height: 505px;
  border: 1px solid #bdbdbd;
  margin: 20px 10px;
`;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
`;

export default function RecentWatchBox() {
  const [basketItems, setBasketItmes] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItmes(items);
  }, []);
  return (
    <div>
      <Wrapper>
        <Title>오늘 본 상품</Title>
        {basketItems?.map((el: any) => (
          <div key={el._id}>
            <div>
              {el.images[0] ? (
                <ProductImage
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  alt="상품이미지"
                />
              ) : (
                <ProductImage src="/images/images.png" />
              )}
            </div>
            <div>{el.name}</div>
            <div>{el.remarks}</div>
            <div>{el.price}</div>
            <div>{el.tags}</div>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}
