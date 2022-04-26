import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./MarketDetail.styles";
import { IMarketDetailUIProps } from "./MarketDetail.types";
import Dompurify from "dompurify";

export default function MarKetDetailUI(props: IMarketDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              {/* <S.Seller>{props.data?.fetchUseditem?.seller.name}</S.Seller> */}
              <S.Seller>판매자</S.Seller>
              <S.CreatedAt>
                {getDate(props.data?.fetchUseditem?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.ProductRemarks>
            {props.data?.fetchUseditem?.remarks}
          </S.ProductRemarks>
          <S.ProductName>{props.data?.fetchUseditem?.name}</S.ProductName>
          <S.Price>{props.data?.fetchUseditem?.price}원</S.Price>
          {/* <S.ImageWrapper>
            {props.data?.fetchBoard.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper> */}
          {typeof window !== "undefined" && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></S.Contents>
          )}

          {/* <S.Contents>{props.data?.fetchUseditem?.contents}</S.Contents> */}
          <S.Tag>{props.data?.fetchUseditem?.tags}</S.Tag>
          <S.line></S.line>
          <S.map>지도</S.map>
          <S.line></S.line>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToProductList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToProductEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDeleteProduct}>삭제하기</S.Button>
        <S.Button>구매하기</S.Button>
        <S.Button>장바구니 담기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
