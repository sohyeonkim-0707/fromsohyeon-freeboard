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

export interface IEnrolledButton {
  isActive: boolean;
}

export interface IProductWriteUIProps {
  handleComplete: (data: any) => void;
  handleOk: () => void;
  handleCancel: () => void;
  showModal: () => void;
  handleSubmit: any;
  register: any;
  getValues: string;
  formState: any;
  fileUrls: any;
  reset: any;
  isOpen: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  address: string;
  zipcode: string;
  hashArr: never[];
  onClickUploadProduct: () => void;
  onClcikEditProduct: () => void;
  onChangeContents: (value: string) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onKeyUpHashTag: (event: any) => void;
  onChangeAddressDetail: (event: any) => void;
}
