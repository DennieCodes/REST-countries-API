import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";

export const CountryDataContext = createContext();

export function CountryDataProvider(props) {
  const [countryData, setCountryData] = useState("");

  // Call API upon mounting and retrieve entire country list but filter only the data that we want
  useEffect(() => {
    async function fetchData() {
      const field =
        "name;population;region;subregion;capital;topLevelDomain;alpha3Code;currencies;languages;borders;flag";

      const countriesURL =
        "https://restcountries.eu/rest/v2/all?fields=" + field;

      try {
        await axios
          .get(countriesURL)
          .then((response) => setCountryData(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <CountryDataContext.Provider value={{ countryData, setCountryData }}>
      {props.children}
    </CountryDataContext.Provider>
  );
}
