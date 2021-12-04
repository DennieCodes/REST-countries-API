import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeToggleButton from "./ThemeToggleButton.js";

// COMPONENTS STYLING
const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 1em;
  justify-content: space-between;
  box-shadow: 0 0 7px 0 ${({ theme }) => theme.dropShadowColor};

  background-color: ${({ theme }) => theme.elementsBG};

  @media (min-width: 481px) {
    padding: 2rem clamp(1rem, 6%, 5rem);
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  margin: 0;

  @media (min-width: 481px) {
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
`;

const HomeLink = styled(Link)`
  color: ${({ theme }) => theme.textColor};
`;

// HEADER Component
const Header = (props) => {
  const themeToggler = props.themeToggler;
  const activeTheme = props.activeTheme;

  return (
    <HeaderContainer>
      <HomeLink to="/">
        <Title>Where in the world?</Title>
      </HomeLink>

      <ThemeToggleButton
        themeToggler={themeToggler}
        activeTheme={activeTheme}
      />
    </HeaderContainer>
  );
};

export default Header;
