import { useContext } from "react";
import { CountryFilterContext } from "../../contexts/CountryFilterContext";

import styled from "styled-components";
import searchIcon from "../../images/search-icon.svg";

// Component Styling
const SearchContainer = styled.div`
  position: relative;
  flex-grow: 1;
  max-width: 30rem;
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
  box-shadow: 1px 0 4px 0 ${(props) => props.theme.colors.dropShadow};
`;

const SearchInputControl = () => {
  const { countryFilter, setCountryFilter } = useContext(CountryFilterContext);

  const handleInputControlChange = (event) => {
    setCountryFilter({
      region: countryFilter.region,
      searchTerm: event.target.value,
    });
  };

  return (
    <SearchContainer>
      <SearchIcon src={searchIcon} alt="Search icon" />
      <SearchInput
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country"
        value={countryFilter.searchTerm}
        onChange={handleInputControlChange}
      />
    </SearchContainer>
  );
};

export default SearchInputControl;
