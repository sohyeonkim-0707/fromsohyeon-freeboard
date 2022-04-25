import * as S from "./MarketList.styles";

export default function ProductItemListItem(props) {
  return (
    <div>
      <S.Wrapper>
        <S.ProductImage></S.ProductImage>

        <S.ProductWrapper>
          <S.name id={props.el._id} onClick={props.onClickMoveToProduct}>
            {props.el?.name}
          </S.name>
          <S.remarks>{props.el?.remarks}</S.remarks>
          <S.tag>{props.el?.tags}</S.tag>
          <S.SellerGood>
            <S.seller>{props.el?.seller.name}</S.seller>
            <S.Likebutton>좋아요</S.Likebutton>
          </S.SellerGood>
        </S.ProductWrapper>

        <S.Price>{props.el?.price} 원</S.Price>
      </S.Wrapper>
    </div>
  );
}
