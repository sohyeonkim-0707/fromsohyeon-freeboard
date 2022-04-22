import styled from "@emotion/styled";
import { IEnrolledButton } from "./MarketWrite.types";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const MainTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  color: #000000;
`;

export const Title = styled.div`
  width: 996px;
  height: 52px;
  /* border: 1px solid red; */
  margin-top: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 52px;
  color: #000000;
`;

export const InputText = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  outline: none;
  /* border: 1px solid blue; */
`;

export const DetailText = styled(ReactQuill)`
  width: 996px;
  height: 300px;
  /* border: 1px solid #bdbdbd; */
  margin-bottom: 40px;
`;

export const Error = styled.div`
  color: red;
  font-size: 9px;
`;

export const MapWrapper = styled.div`
  width: 996px;
  height: 300px;
  /* border: 1px solid blue; */
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MapImage = styled.div`
  width: 384px;
  height: 100%;
`;
export const Location = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
`;

export const KakaoMap = styled.div`
  width: 384px;
  height: 252px;
  background: yellow;
`;

export const InputMap = styled.div`
  width: 588px;
  height: 100%;
  /* border: 1px solid red; */
`;

export const GpasWrapper = styled.div`
  width: 100%;
  height: 128px;
  /* border: 1px solid orange; */
`;

export const GpsTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
`;

export const GpsInput = styled.div`
  display: flex;
  flex-direction: row;

  input {
    width: 108px;
    height: 52px;
    border: 1px solid #bdbdbd;
    margin-right: 20px;
    outline: none;
  }

  div {
    margin-right: 20px;
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 588px;
  height: 172px;
  /* border: 1px solid blue; */
`;

export const AddressTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
`;

export const AddressInput = styled.input`
  width: 588px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-top: 10px;
  outline: none;
`;

export const EnrolledButton = styled.button`
  width: 179px;
  height: 52px;
  /* background: #bdbdbd; */
  background: ${(props: IEnrolledButton) =>
    props.isActive ? "yellow" : "#bdbdbd"};
  border: none;
  margin: 70px auto;
  display: block;
  cursor: pointer;
`;
