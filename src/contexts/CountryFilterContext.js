import { createContext, useState } from "react";

export const CountryFilterContext = createContext();

export function CountryFilterProvider(props) {
  const initialState = { searchTerm: "", region: "" };
  const [countryFilter, setCountryFilter] = useState(initialState);

  return (
    <CountryFilterContext.Provider value={{ countryFilter, setCountryFilter }}>
      {props.children}
    </CountryFilterContext.Provider>
  );
}
