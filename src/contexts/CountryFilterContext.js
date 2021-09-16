import { createContext, useState } from "react";

export const CountryFilterContext = createContext();

export function CountryDataProvider(props) {
  const [countryFilter, setCountryFilter] = useState("");

  return (
    <CountryFilterContext.Provider value={{ countryFilter, setCountryFilter }}>
      {props.children}
    </CountryFilterContext.Provider>
  );
}
