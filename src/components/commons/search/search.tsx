import { ChangeEvent } from "react";

import { ISearchbars01Props } from "./Search.types";
import _ from "lodash";

const SearchBox = styled.input`
  height: 45px;
  width: 400px;
  background: lightgray;
  border-radius: 10px;
  border: none;
  text-indent: 20px;
  display: block;
  margin: 0 auto;
  :hover {
    background: white;
    border: 1px solid lightgray;
    color: black;
  }
`;

export default function SearchPage() {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return (
    <SearchBox
      name="searchTitle"
      type="text"
      placeholder="제목을 입력하세요 🔍"
      onChange={onChangeSearchbar}
    ></SearchBox>
  );
}
