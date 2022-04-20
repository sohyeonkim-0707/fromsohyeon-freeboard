import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketWriteProps {
  data?: any;
  isEdit: boolean;
}

export interface IMarketWriteUIprops {
  handleSubmit: any;
}

export interface IUpdateProductInput {
  name?: string;
  title?: string;
  remarks?: string;
  contents?: string;
  price?: string;
}

export interface IProductWriteUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  onClickUploadProduct: () => void;
  onClcikEditProduct: () => void;
}
