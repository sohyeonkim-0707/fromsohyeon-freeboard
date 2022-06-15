import { ChangeEvent } from "react";
import { ISearchbars01Props } from "./Search01.types";
import _ from "lodash";
import styled from "@emotion/styled";

const Searchbar = styled.div`
  display: flex;
  display: block;
  flex-direction: row;
  align-items: center;
  width: 600px;
  height: 45px;
  margin: 0 auto;
  background: #dcdcdc;
  border-radius: 10px;
`;

const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  margin: 0px 20px;
  background: none;
  border: none;
  outline: none;
`;

export default function Search01(props: ISearchbars01Props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <div>
      <Searchbar>
        <SearchbarInput
          placeholder="🔍 검색어를 입력해 주세요."
          onChange={onChangeSearchbar}
        />
      </Searchbar>
    </div>
  );
}
