import styled from "styled-components";
// import crescent from "../../../public/images/crescent-moon-svgrepo-com.svg";
import crescent from "../../images/crescent-moon-svgrepo-com.svg";
import crescentDark from "../../images/dark-mode-crescent.svg";
// import crescentDark from "../../../public/images/dark-mode-crescent.png";

const ThemeToggle = styled.button`
  color: ${({ theme }) => theme.textColor};
  border: none;
  background-color: ${({ theme }) => theme.elementsBG};
  cursor: pointer;
`;

const ThemeToggleIcon = styled.img`
  height: 1rem;
  width: 1rem;
  margin-right: 0.5em;
  margin-bottom: -0.15rem;
`;

const ThemeToggleButton = (props) => {
  const themeToggler = props.themeToggler;
  const activeTheme = props.activeTheme;
  const activeCrescentIcon = activeTheme === "light" ? crescent : crescentDark;

  return (
    <ThemeToggle onClick={themeToggler}>
      <ThemeToggleIcon src={activeCrescentIcon} alt="Crescent Moon" />
      {activeTheme === "light" ? "Dark Mode" : "Light Mode"}
    </ThemeToggle>
  );
};

export default ThemeToggleButton;
