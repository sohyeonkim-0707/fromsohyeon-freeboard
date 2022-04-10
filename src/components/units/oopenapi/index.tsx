import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`ya
  margin: 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
`;

export default function OpenapiList() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  // useEffect 에서 API 요청
  useEffect(() => {
    const getImg = async () => {
      new Array(15).fill(1).map(async (_) => {
        const result: any = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        console.log(result);
        setImgUrls((prev) => [...prev, result.data.message]); // 기존에 있던 이미지 + 가지고 온 이미지
      });
    };
    getImg();
  }, []);

  return (
    <div>
      <Wrapper>
        <div>
          {imgUrls.map((el, index) => (
            <>
              <Img key={el} src={el} />
              {(index + 1) % 5 === 0 && <br />}
            </>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
