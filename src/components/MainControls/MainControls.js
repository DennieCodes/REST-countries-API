import styled from "styled-components";
import searchIcon from "../../images/search-icon.svg";

// Components Styling
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 481px) {
    padding: 0 clamp(1rem, 7%, 4rem);
  }

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FilterInput = styled.input`
  height: 3rem;
  padding-left: 2rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 1px 0 4px 0 ${(props) => props.theme.colors.dropShadow};

  flex-grow: 1;
  max-width: 30rem;
`;

const RegionContainer = styled.div`
  height: 3.125rem;
  position: relative;
  font-family: ${(props) => props.theme.fonts.main};

  flex-grow: 1;
  max-width: 12.625rem;
`;

const RegionLabel = styled.label`
  position: absolute;
  left: 1.5rem;
  top: 0.875rem;
`;

const RegionSelector = styled.select`
  font-family: ${(props) => props.theme.fonts.main};
  height: 3.125rem;
  width: 100%;

  border: 0;
  border-radius: 5px;
  box-shadow: 1px 0 4px 0 ${(props) => props.theme.colors.dropShadow};
`;

const MainControls = () => {
  return (
    <ControlContainer>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        placeholder="Search for a country"
      />

      <RegionContainer>
        <RegionLabel>Filter by Region</RegionLabel>
        <RegionSelector name="region" id="region">
          <option>All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </RegionSelector>
      </RegionContainer>
    </ControlContainer>
  );
};

export default MainControls;
