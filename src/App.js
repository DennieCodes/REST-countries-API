import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import Header from "./components/Header/Header";
import MainControls from "./components/MainControls/MainControls";
import CountryDirectory from "./components/CountryDirectory/CountryDirectory";

import { CountryDataProvider } from "./contexts/CountryDataContext";
import { CountryFilterProvider } from "./contexts/CountryFilterContext";

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
    <Router>
      <ThemeProvider theme={theme}>
        <CountryDataProvider>
          <CountryFilterProvider>
            <AppContainer>
              <Header />

              <Main>
                <MainControls />

                <Switch>
                  <Route path="/">
                    <CountryDirectory />
                  </Route>
                </Switch>
              </Main>
            </AppContainer>
          </CountryFilterProvider>
        </CountryDataProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;

// https://restcountries.eu/#rest-countries
