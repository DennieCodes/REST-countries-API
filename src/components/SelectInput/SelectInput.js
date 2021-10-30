import { useContext, useState } from "react";
import styled from "styled-components";
import { CountryFilterContext } from "../../contexts/CountryFilterContext.js";

const SelectInputContainer = styled.div`
  background-color: ${({ theme }) => theme.elementsBG};
  border-radius: 5px;
  position: relative;
  cursor: pointer;

  flex-grow: 1;
  max-width: 12.625rem;
`;

const SelectInputHeader = styled.div`
  padding: 1rem 1.5rem;
  box-shadow: 1px 0 4px 0 ${({ theme }) => theme.dropShadowColor};
`;

const SelectDropDownContainer = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 0.8rem;
`;

const SelectDropDownList = styled.ul`
  box-shadow: 1px 0 4px 0 ${({ theme }) => theme.dropShadowColor};
  background-color: ${({ theme }) => theme.elementsBG};
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
