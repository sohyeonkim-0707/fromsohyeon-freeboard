import styled from "@emotion/styled";

const BlockLo = styled.div`
  display: flex;

  width: 900px;
  margin-left: 20px;
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
