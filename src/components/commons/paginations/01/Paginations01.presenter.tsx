import { Page } from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <div>
      {/* 이전페이지 */}
      <Page onClick={props.onClickPrevPage}>&lt;</Page>

      {/* 페이지 네비게이션 */}
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      {/* 다음페이지 */}
      <Page onClick={props.onClickNextPage}>&gt;</Page>
    </div>
  );
}
