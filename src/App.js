import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useToggleTheme from "./hooks/useToggleTheme";

import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/theme";

import Header from "./components/Header/Header.js";
import MainControls from "./components/MainControls/MainControls.js";
import CountryDirectory from "./components/CountryDirectory/CountryDirectory.js";
import CountryDetail from "./components/CountryDetail/CountryDetail.js";

import { CountryDataProvider } from "./contexts/CountryDataContext.js";
import { CountryFilterProvider } from "./contexts/CountryFilterContext.js";

// Components Styling
const AppContainer = styled.div``;
const Main = styled.main``;

// App Component
const App = () => {
  const [activeTheme, themeToggler] = useToggleTheme("light");
  const selectedTheme = activeTheme === "light" ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <CountryDataProvider>
          <CountryFilterProvider>
            <AppContainer>
              <Header themeToggler={themeToggler} activeTheme={activeTheme} />

              <Main>
                <Switch>
                  <Route exact path="/">
                    <MainControls activeTheme={activeTheme} />
                    <CountryDirectory />
                  </Route>

                  <Route
                    path="/country/:name"
                    children={<CountryDetail activeTheme={activeTheme} />}
                  />
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
