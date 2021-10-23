import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: "Nunito Sans", sans-serif;
  transition: all 0.50s linear;
  background: ${({ theme }) => theme.AppContainerBG};
  color: ${({ theme }) => theme.textColor};
}
`;
