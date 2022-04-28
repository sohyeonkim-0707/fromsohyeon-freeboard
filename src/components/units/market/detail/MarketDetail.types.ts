export interface IMarketDetailUIProps {
  data?: any;
  wishCount?: number;
  isWishAdd?: boolean;
  onClickMoveToProductEdit: () => void;
  onClickDeleteProduct: () => void;
  onClickMoveToProductList: () => void;
  onClickMoveToBuyProduct: () => void;
  wishCountHandler: () => void;
  onClickBasket: (el: any) => () => void;
  wishAddHandler: () => void;
}
