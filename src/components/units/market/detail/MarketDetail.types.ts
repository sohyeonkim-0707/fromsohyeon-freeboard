export interface IMarketDetailUIProps {
  data?: any;
  onClickMoveToProductEdit: () => void;
  onClickDeleteProduct: () => void;
  onClickMoveToProductList: () => void;
  onClickMoveToBuyProduct: () => void;
  onClickBasket: (el: any) => () => void;
}
