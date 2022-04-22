import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 180px;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ProductImage = styled.div`
  width: 160px;
  height: 160px;
  background: lightgray;
`;

export const ProductWrapper = styled.div`
  width: 860px;
  height: 160px;
  border: 1px solid blue;
  padding-left: 10px;
`;

export const Price = styled.div`
  width: 160px;
  height: 160px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 160px;
  border: 1px solid green;
`;

export const name = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;
export const remarks = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
  margin: 4px 0px;
`;
export const tag = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
  margin: 4px 0px;
`;
export const seller = styled.div`
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
  height: 700px;
  overflow: auto;
`;
