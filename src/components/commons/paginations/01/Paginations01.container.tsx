import { MouseEvent, useState } from "react";
import Paginations01UI from "./Paginations01.presenter";
import { IPaginations01Props } from "./Paginations01.types";

export default function Paginations01(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1); // 시작 페지 값을 알려줄 state
  const [activedPage, setActivedPage] = useState(1); // 현재 페이지
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0; // 마지막 페이지
  // const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  // 각 페이지를 눌렀을 때 화면을 해당 페이지값으로 재구현 해줄 함수
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    props.refetch({ page: activedPage });
  };

  // 이전페이지
  const onClickPrevPage = () => {
    if (startPage <= 1) return; // -1 페이지 같이 0 이하로는 내려가지 않도록
    setStartPage((prev) => prev - 10);
    setActivedPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  // 다음페이지
  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return; // 1 ~ 10 목록 이후 11 ~ 20 목록, 마지막 페이지 이후로 계속 넘어가지 않도록
    setStartPage((prev) => prev + 10);
    setActivedPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <Paginations01UI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
