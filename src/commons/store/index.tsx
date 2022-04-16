// globalstate 모아놓는 곳 (중간평가시 사용 안함 )

import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
