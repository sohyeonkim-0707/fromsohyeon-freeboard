import * as S from "./MarketList.styles";

export default function ProductItemListItem(props) {
  // console.log("img", props.el.images); // 이미지값 찍어보기
  return (
    <div>
      <S.Wrapper>
        {/* <S.ProductImage>{props.el?.images}</S.ProductImage> */}
        {/* <S.ProductImage
          src={`https://storage.googleapis.com/${props.el.images[0]}`}
        /> */}
        {props.el.images[0] ? (
          <S.ProductImage
            src={`https://storage.googleapis.com/${props.el.images[0]}`}
            alt="상품이미지"
          />
        ) : (
          <S.ProductImage src="/images/images.png" />
        )}

        <S.ProductWrapper>
          <S.name
            id={props.el._id}
            onClick={props.onClickMoveToProduct(props.el)}
          >
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
