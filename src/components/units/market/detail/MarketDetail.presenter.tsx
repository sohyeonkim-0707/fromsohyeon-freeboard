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
          <S.Price>{props.data?.fetchUseditem?.price}μ</S.Price>
          {/* π μ°νκΈ° */}

          <S.Wish onClick={props.wishCountHandler}>
            μ°νκΈ°{props.data?.fetchUseditem?.pickedCount}
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

          {/* π ν΄μνκ·Έ */}
          <S.Tag>{props.data?.fetchUseditem?.tags} </S.Tag>

          <S.line></S.line>
          {/* μ§λ */}
          <div>
            <KakaoMapFetchPage data={props.data} />
          </div>

          <S.line></S.line>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToProductList}>λͺ©λ‘μΌλ‘</S.Button>
        <S.Button onClick={props.onClickMoveToProductEdit}>μμ νκΈ°</S.Button>
        <S.Button onClick={props.onClickDeleteProduct}>μ­μ νκΈ°</S.Button>
        <S.Button onClick={props.onClickMoveToBuyProduct}>κ΅¬λ§€νκΈ°</S.Button>
        <S.Button onClick={props.onClickBasket(props.data)}>
          μ₯λ°κ΅¬λ λ΄κΈ°
        </S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
