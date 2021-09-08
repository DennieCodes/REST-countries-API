import styled from "styled-components";
import crescent from "../../images/crescent-moon-svgrepo-com.svg";

// COMPONENTS STYLING
const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 1rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 7px 0 ${(props) => props.theme.colors.dropShadow};
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 1rem;
  margin: 0;
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
