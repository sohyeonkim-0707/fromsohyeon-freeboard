import { useRouter } from "next/router";
import { useEffect } from "react";

// ๐ useAuth
export function useAuth() {
  const router = useRouter();

  // ๊ถํ๋ถ๊ธฐ ๋ก์ง ์ถ๊ฐํ๊ธฐ
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("๋ก๊ทธ์ธ ํ ์ด์ฉ ๊ฐ๋ฅํฉ๋๋ค!!!");
      router.push("/login");
    }
  }, []);
}
