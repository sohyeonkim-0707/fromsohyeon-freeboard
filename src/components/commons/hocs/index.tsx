// ๐  withAuth

import { useRouter } from "next/router";
import { useEffect } from "react";

// @ts-ignore > ํ์์คํฌ๋ฆฝํธ ์ ๊น ๋ฌด์ ๋ฐ์ค ์ง์
export const withAuth = (Componenet) => (props) => {
  const router = useRouter();

  // ๊ถํ๋ถ๊ธฐ ๋ก์ง ์ถ๊ฐํ๊ธฐ
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("๋ก๊ทธ์ธ ํ ์ด์ฉ ๊ฐ๋ฅํฉ๋๋ค!!!");
      router.push("/login");
    }
  }, []);

  return <Componenet {...props} />;
};
