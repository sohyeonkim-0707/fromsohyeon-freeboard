import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  border: 1px solid black;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Seller = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const ProductRemarks = styled.div`
  font-size: 18px;
  color: #bdbdbd;
  margin: 4px 0px;
`;

export const ProductName = styled.h1`
  margin: 4px 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #4f4f4f;
`;

export const Price = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
`;

export const Wish = styled.div`
  width: 120px;
  height: 30px;
  margin-bottom: 30px;
  background: orange;
  font-size: 20px;
  text-indent: 10px;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

export const Wish2 = styled.b`
  width: 30%;
  height: 30px;
  margin-left: 30px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const Tag = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #bdbdbd;
`;

export const line = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
`;

export const map = styled.div`
  width: 792px;
  height: 360px;
  margin: 50px auto;
  border: 1px solid lightgray;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  margin: 0px 12px;
  background-color: white;
  border: 1px solid gray;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 160px;
`;

export const LocationIcon = styled.img``;
export const LikeIcon = styled(LikeOutlined)`
  margin: 0px 20px;
  font-size: 24px;
  color: #ffd600;
  cursor: pointer;
`;

export const DislikeIcon = styled(DislikeOutlined)`
  margin: 0px 20px;
  font-size: 24px;
  color: #828282;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  color: #ffd600;
`;

export const DislikeCount = styled.div`
  color: #828282;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 996px;
  height: 480px;
  margin-bottom: 30px;
`;
