import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 180px;
  margin: 0 auto;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProductImage = styled.img`
  width: 160px;
  height: 160px;
  /* background: lightgray; */
`;

export const ProductWrapper = styled.div`
  width: 860px;
  height: 160px;
  padding-left: 10px;
  /* border: 1px solid blue; */
`;

export const Price = styled.div`
  width: 160px;
  height: 160px;
  background: #ffe004;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 160px;
`;

export const name = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  cursor: pointer;
`;
export const remarks = styled.div`
  margin: 4px 0px;
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
`;
export const tag = styled.div`
  margin: 10px 0px;
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
`;

export const SellerGood = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
export const seller = styled.div`
  margin-right: 10px;
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
`;
export const Likebutton = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
`;
export const Scroll = styled.div`
  width: 1300px;
  height: 800px;
  overflow: auto;
`;
