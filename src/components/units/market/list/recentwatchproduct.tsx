// 오늘 본 상품
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 196px;
  height: 730px;
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
  /* border: 1px solid red; */
  margin-left: 45px;
  margin-top: 13px;
`;

const InputWrapper = styled.div`
  width: 156px;
  height: 210px;
  border: 1px solid #bdbdbd;
  margin: 10px auto;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  margin-left: 5px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-left: 5px;
`;
const Remarks = styled.div`
  font-size: 16px;
  margin-left: 5px;
  color: #4f4f4f;
`;
const Tags = styled.div`
  font-size: 12px;
  color: #bdbdbd;
  margin-left: 5px;
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
          <InputWrapper key={el._id}>
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
            <Name>{el.name}</Name>
            <Remarks>{el.remarks}</Remarks>
            <Price>{el.price} 원</Price>
            <Tags>{el.tags}</Tags>
          </InputWrapper>
        ))}
      </Wrapper>
    </div>
  );
}
