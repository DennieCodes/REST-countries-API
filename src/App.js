import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import Header from "./components/Header/Header";
import MainControls from "./components/MainControls/MainControls";
import CountryDirectory from "./components/CountryDirectory/CountryDirectory";
import CountryDetail from "./components/CountryDetail/CountryDetail";

import { CountryDataProvider } from "./contexts/CountryDataContext";
import { CountryFilterProvider } from "./contexts/CountryFilterContext";

// Components Styling
const AppContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightBackground};
`;

const Main = styled.main``;

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
                <Switch>
                  <Route exact path="/">
                    <MainControls />
                    <CountryDirectory />
                  </Route>

                  <Route path="/country/:name" children={<CountryDetail />} />
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
