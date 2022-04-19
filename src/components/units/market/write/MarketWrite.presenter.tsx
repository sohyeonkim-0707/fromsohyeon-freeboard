import * as S from "./MarketWrite.styles";
// import { IMarketWriteUIprops } from "./MarketWrite.types";

export default function ProductWriteUI(props: any) {
  return (
    <S.Wrapper>
      <S.MainTitle>상품 등록하기</S.MainTitle>
      <form onSubmit={props.handleSubmit(props.onClickUploadProduct)}>
        <S.Title>상품명</S.Title>
        <S.InputText
          type="text"
          {...props.register("name")}
          placeholder="상품명을 작성해주세요."
        />
        <S.Error>{props.formState.errors.name?.message}</S.Error>

        <S.Title>한줄요약</S.Title>
        <S.InputText
          type="text"
          {...props.register("remarks")}
          placeholder="상품명을 작성해주세요."
        />
        <S.Error>{props.formState.errors.remarks?.message}</S.Error>

        <S.Title>상품설명</S.Title>
        <S.DetailText
          {...props.register("contents")}
          placeholder="상품설명을 작성해주세요."
        />
        <S.Error>{props.formState.errors.contents?.message}</S.Error>

        <S.Title>판매가격</S.Title>
        <S.InputText
          type="text"
          {...props.register("price")}
          placeholder="판매가격을 작성해주세요."
        />
        <S.Error>{props.formState.errors.price?.message}</S.Error>

        <S.Title>태그입력</S.Title>
        <S.InputText
          type="text"
          {...props.register("tags")}
          placeholder="#태그 #태그 #태그"
        />
        <S.Error>{props.formState.errors.tags?.message}</S.Error>
        <S.EnrolledButton>등록하기</S.EnrolledButton>
      </form>
    </S.Wrapper>
  );
}
