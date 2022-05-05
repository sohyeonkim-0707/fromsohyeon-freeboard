import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./MarketDetail.styles";
import { IMarketDetailUIProps } from "./MarketDetail.types";
import Dompurify from "dompurify";
import KakaoMapFetchPage from "../../../commons/kakaoMapFetch/kakaomap.container";

export default function MarKetDetailUI(props: IMarketDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              {/* <S.Seller>{props.data?.fetchUseditem?.seller.name}</S.Seller> */}
              <S.Seller>{props.data?.fetchUseditem?.seller.name}</S.Seller>
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
          {/* 📌 찜하기 */}

          <S.Wish onClick={props.wishCountHandler}>
            찜하기{props.data?.fetchUseditem?.pickedCount}
          </S.Wish>

          <div></div>

          <S.ImageWrapper>
            {props.data?.fetchUseditem?.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper>
          {typeof window !== "undefined" && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></S.Contents>
          )}

          {/* 📌 해시태그 */}
          <S.Tag>{props.data?.fetchUseditem?.tags} </S.Tag>

          <S.line></S.line>
          {/* 지도 */}
          <KakaoMapFetchPage data={props.data} />

          <S.line></S.line>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToProductList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToProductEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDeleteProduct}>삭제하기</S.Button>
        <S.Button onClick={props.onClickMoveToBuyProduct}>구매하기</S.Button>
        <S.Button onClick={props.onClickBasket(props.data)}>
          장바구니 담기
        </S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
