import { ChangeEvent } from "react";
import { ISearchbars01Props } from "./Search01.types";
import _ from "lodash";
import styled from "@emotion/styled";

const Searchbar = styled.div`
  width: 600px;
  height: 45px;
  border-radius: 10px;
  background: #dcdcdc;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  display: block;
`;

const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
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
