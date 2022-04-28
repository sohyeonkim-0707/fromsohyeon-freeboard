import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./MarketWrite.styles";
import { IProductWriteUIProps } from "./MarketWrite.types";
// import { IMarketWriteUIprops } from "./MarketWrite.types";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  useEffect(() => {
    props.reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data]);
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
          value={props.getValues("contents") || ""}
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

        <S.MapWrapper>
          <S.MapImage>
            <S.Location>거래위치</S.Location>
            <S.KakaoMap>지도</S.KakaoMap>
          </S.MapImage>

          <S.InputMap>
            <S.GpasWrapper>
              <S.GpsTitle>GPS</S.GpsTitle>
              <S.GpsInput>
                <input type="text" placeholder="위도(LAT)"></input>
                <div> o </div>
                <input type="text" placeholder="경도(LAT)"></input>
              </S.GpsInput>
            </S.GpasWrapper>

            <S.AddressWrapper>
              <S.AddressTitle> 주소</S.AddressTitle>
              <S.AddressInput type="text"></S.AddressInput>
              <S.AddressInput type="text"></S.AddressInput>
            </S.AddressWrapper>
          </S.InputMap>
        </S.MapWrapper>
        {/* 사진첨부 */}

        <S.Label>사진첨부</S.Label>
        <S.PhotoWrapper>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.PhotoWrapper>
        <S.OptionWrapper>
          <S.Label>메인 사진 설정</S.Label>
          <S.RadioButton type="radio" id="image1" name="radio-button" />
          <S.RadioLabel htmlFor="image1">사진 1</S.RadioLabel>
          <S.RadioButton type="radio" id="image2" name="radio-button" />
          <S.RadioLabel htmlFor="image2">사진 2</S.RadioLabel>
        </S.OptionWrapper>
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
