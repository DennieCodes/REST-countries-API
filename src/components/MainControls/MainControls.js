import styled from "styled-components";
import SearchInputControl from "./SearchInputControl.js";
import SelectInput from "../SelectInput/SelectInput.js";

// Components Styling

const ControlContainer = styled.div`
  margin: 1.5rem 1rem;
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

const MainControls = (props) => {
  const activeTheme = props.activeTheme;

  return (
    <ControlContainer>
      <SearchInputControl activeTheme={activeTheme} />
      <SelectInput />
    </ControlContainer>
  );
};

export default MainControls;
