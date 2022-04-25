// // 상품등록하기

import { useAuth } from "../../../src/components/commons/hooks";
import MarketWrite from "../../../src/components/units/market/write/MarketWrite.container";

export default function ProductNewPage() {
  useAuth();
  return <MarketWrite isEdit={false} />;
}
