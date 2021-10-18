import { useContext, useState } from "react";
import styled from "styled-components";
import { CountryFilterContext } from "../../contexts/CountryFilterContext";

const SelectInputContainer = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.fonts.main};
  cursor: pointer;

  flex-grow: 1;
  max-width: 12.625rem;
`;

const SelectInputHeader = styled.div`
  margin-bottom: 0.6rem;
  padding: 1rem 1.5rem;
  box-shadow: 1px 0 4px 0 ${(props) => props.theme.colors.dropShadow};
`;

const SelectDropDownContainer = styled.div`
  position: absolute;
  width: 100%;
  background: #fff;
`;

const SelectDropDownList = styled.ul`
  box-shadow: 1px 0 4px 0 ${(props) => props.theme.colors.dropShadow};
  box-sizing: border-box;
  padding-left: 1rem;

  &:first-child {
    padding-top: 1.25rem;
  }
`;

const SelectDropDownItem = styled.li`
  list-style: none;
  padding-bottom: 1.25rem;
  cursor: pointer;
`;

const SelectInput = () => {
  const { countryFilter, setCountryFilter } = useContext(CountryFilterContext);

  // Control open/close state of drop down select
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDownState = () => setIsDropDownOpen(!isDropDownOpen);

  // Handle selected Option item selection
  const [selectOption, setSelectOption] = useState("Filter by Region");

  const onSelectItemClick = (value) => {
    setSelectOption(value);
    setIsDropDownOpen(false);

    setCountryFilter({
      region: value,
      searchTerm: countryFilter.searchTerm,
    });
  };

  const selectItemsArray = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const selectItems = selectItemsArray.map((item, index) => {
    return (
      <SelectDropDownItem
        key={index}
        onClick={() => {
          onSelectItemClick(item);
        }}
      >
        {item}
      </SelectDropDownItem>
    );
  });

  return (
    <>
      <SelectInputContainer>
        <SelectInputHeader onClick={toggleDropDownState}>
          {selectOption}
        </SelectInputHeader>

        {isDropDownOpen && (
          <SelectDropDownContainer>
            <SelectDropDownList>{selectItems}</SelectDropDownList>
          </SelectDropDownContainer>
        )}
      </SelectInputContainer>
    </>
  );
};

export default SelectInput;
