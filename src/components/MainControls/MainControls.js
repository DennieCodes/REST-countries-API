import styled from "styled-components";
import SearchInputControl from "./SearchInputControl";
import SelectInput from "../SelectInput/SelectInput";

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

const MainControls = () => {
  return (
    <ControlContainer>
      <SearchInputControl />
      <SelectInput />
    </ControlContainer>
  );
};

export default MainControls;
