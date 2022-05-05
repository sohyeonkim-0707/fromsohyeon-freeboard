import styled from "@emotion/styled";

const BlockLo = styled.div`
  display: flex;
  width: 900px;
  margin: 100px auto;
`;

export default function KakaoMapFetchUI(props) {
  return (
    <BlockLo>
      <div>
        <div id="map" style={{ width: "860px", height: "448px" }}></div>
      </div>
    </BlockLo>
  );
}
