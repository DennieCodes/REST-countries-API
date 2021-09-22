import React from "react";
import styled from "styled-components";
import searchIcon from "../../images/search-icon.svg";

const SearchInput = styled.input`
  height: 3rem;
  padding-left: 2rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 1px 0 4px 0 ${(props) => props.theme.colors.dropShadow};

  flex-grow: 1;
  max-width: 30rem;
`;

const SearchInputControl = () => {
  return (
    <>
      <SearchInput
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country"
      />
    </>
  );
};

export default SearchInputControl;
