import * as S from "./MarketWrite.styles";
import { IProductWriteUIProps } from "./MarketWrite.types";
// import { IMarketWriteUIprops } from "./MarketWrite.types";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <S.Wrapper>
      <S.MainTitle>
        {props.isEdit ? "상품 수정하기" : "상품 등록하기"}
      </S.MainTitle>

      {/* <form onSubmit={props.handleSubmit(props.onClickUploadProduct)}> */}
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClcikEditProduct)
            : props.handleSubmit(props.onClickUploadProduct)
        }
      >
        <S.Title>상품명</S.Title>
        <S.InputText
          type="text"
          {...props.register("name")}
          placeholder="상품명을 작성해주세요."
          defaultValue={props.data?.fetchUseditem.name}
        />
        <S.Error>{props.formState.errors.name?.message}</S.Error>

        <S.Title>한줄요약</S.Title>
        <S.InputText
          type="text"
          {...props.register("remarks")}
          placeholder="상품명을 작성해주세요."
          defaultValue={props.data?.fetchUseditem.remarks}
        />
        <S.Error>{props.formState.errors.remarks?.message}</S.Error>

        <S.Title>상품설명</S.Title>
        <S.DetailText
          // {...props.register("contents")}
          onChange={props.onChangeContents}
          placeholder="상품설명을 작성해주세요."
          defaultValue={props.data?.fetchUseditem.contents}
        />
        <S.Error>{props.formState.errors.contents?.message}</S.Error>

        <S.Title>판매가격</S.Title>
        <S.InputText
          type="text"
          {...props.register("price")}
          placeholder="판매가격을 작성해주세요."
          defaultValue={props.data?.fetchUseditem.price}
        />
        <S.Error>{props.formState.errors.price?.message}</S.Error>

        <S.Title>태그입력</S.Title>
        <S.InputText
          type="text"
          {...props.register("tags")}
          placeholder="#태그 #태그 #태그"
          defaultValue={props.data?.fetchUseditem.tags}
        />
        <S.Error>{props.formState.errors.tags?.message}</S.Error>

        <S.EnrolledButton
          onClick={
            props.isEdit ? props.onClcikEditProduct : props.onClickUploadProduct
          }
          isActive={props.formState.isValid}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.EnrolledButton>
      </form>
    </S.Wrapper>
  );
}
