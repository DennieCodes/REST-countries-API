import styled, { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import Header from "./components/Header/Header";
import MainControls from "./components/MainControls/MainControls";
import CountryDirectory from "./components/CountryDirectory/CountryDirectory";

import { CountryDataProvider } from "./contexts/CountryDataContext";
import { CountryFilterProvider } from "./contexts/CountryDataContext";

// Components Styling
const AppContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightBackground};
`;

const Main = styled.main`
  padding: 1.5rem 1rem;
`;

// App Component
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CountryDataProvider>
        <AppContainer>
          <Header />

          <Main>
            <MainControls />
            <CountryDirectory />
          </Main>
        </AppContainer>
      </CountryDataProvider>
    </ThemeProvider>
  );
};

export default App;

// https://restcountries.eu/#rest-countries
