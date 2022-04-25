import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 196px;
  height: 505px;
  border: 1px solid red;
`;

export default function RecentWatchBox(props) {
  const [basketItems, setBasketItmes] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItmes(items);
  }, []);

  return (
    <div>
      <Wrapper>
        <div>오늘 본 상품</div>
        {basketItems?.map((el: any) => (
          <div key={el._id}>
            <div>
              <img src="/images/heart.png" />
              <div>{el.pickedCount}</div>
            </div>
            <div>
              <div></div>
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
