import { useRouter } from "next/router";
import * as S from "./MarketList.styles";

export default function ProductItemListItem(props) {
  return (
    <div>
      <S.Wrapper>
        <S.ProductImage>판매자</S.ProductImage>

        <S.ProductWrapper>
          <S.name>{props.el?.name}</S.name>
          <S.remarks>{props.el?.remarks}</S.remarks>
          <S.tag>{props.el?.tags}</S.tag>
          <S.seller>판매자</S.seller>
          <S.Likebutton>좋아요</S.Likebutton>
        </S.ProductWrapper>

        <S.Price>{props.el?.price} 원</S.Price>
      </S.Wrapper>
    </div>
  );
}
