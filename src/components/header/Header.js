import styled from "styled-components";
import crescent from "../../images/crescent-moon-svgrepo-com.svg";

// COMPONENTS STYLING
const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 1em;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 7px 0 ${(props) => props.theme.colors.dropShadow};

  @media (min-width: 481px) {
    padding: 2rem clamp(1rem, 6%, 5rem);
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 1rem;
  margin: 0;

  @media (min-width: 481px) {
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
`;

const ThemeToggleButton = styled.button`
  font-family: ${(props) => props.theme.fonts.main};
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const ThemeToggleIcon = styled.img`
  height: 1rem;
  width: 1rem;
  margin-right: 0.5em;
  margin-bottom: -0.15rem;
`;

// HEADER Component
const Header = () => {
  return (
    <HeaderContainer>
      <Title>Where in the world?</Title>
      <ThemeToggleButton>
        <ThemeToggleIcon src={crescent} alt="Crescent Moon" />
        Dark Mode
      </ThemeToggleButton>
    </HeaderContainer>
  );
};

export default Header;
