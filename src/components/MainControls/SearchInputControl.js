import { useContext } from "react";
import { CountryFilterContext } from "../../contexts/CountryFilterContext.js";

import styled from "styled-components";
import searchIcon from "../../images/search-icon.svg";
import searchIconDark from "../../images/search-icon-dark.svg";

// Component Styling
const SearchContainer = styled.div`
  position: relative;
  flex-grow: 1;
  max-width: 30rem;
  border-radius: 5px;
`;

const SearchIcon = styled.img`
  position: absolute;
  height: 1rem;
  width: 1rem;
  top: 1rem;
  left: 2rem;
`;

const SearchInput = styled.input`
  height: 3rem;
  width: calc(100% - 4.68rem);
  padding-left: 4.68rem;
  border: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.elementsBG};
  color: ${({ theme }) => theme.inputTextColor};
  box-shadow: 1px 0 4px 0 ${({ theme }) => theme.dropShadowColor};

  &::placeholder {
    color: ${({ theme }) => theme.inputTextColor};
  }
`;

const SearchInputControl = (props) => {
  const { countryFilter, setCountryFilter } = useContext(CountryFilterContext);
  const activeTheme = props.activeTheme;

  const activeSearchIcon =
    activeTheme === "light" ? searchIcon : searchIconDark;

  const handleInputControlChange = (event) => {
    setCountryFilter({
      region: countryFilter.region,
      searchTerm: event.target.value,
    });
  };

  return (
    <SearchContainer>
      <SearchIcon src={activeSearchIcon} alt="Search icon" />
      <SearchInput
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country..."
        value={countryFilter.searchTerm}
        onChange={handleInputControlChange}
      />
    </SearchContainer>
  );
};

export default SearchInputControl;
