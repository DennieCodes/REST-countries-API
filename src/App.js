import styled, { ThemeProvider } from "styled-components";
import theme from "./themes/theme";

import Header from "./components/header/Header";

const AppContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightBackground};
`;

// font-family: ${(props) => props.theme.fonts.main};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
