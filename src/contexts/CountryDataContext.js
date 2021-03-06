import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CountryDataContext = createContext();

export function CountryDataProvider(props) {
  const [countryData, setCountryData] = useState("");

  // console.log("Current theme is: ", theme.dropShadowColor);

  // Call API upon mounting and retrieve entire country list but filter only the data that we want
  useEffect(() => {
    async function fetchData() {
      const field =
        "name,population,region,subregion,capital,topLevelDomain,alpha3Code,currencies,languages,borders,flags";

      const countriesURL = "https://restcountries.com/v2/all?fields=" + field;

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
    <CountryDataContext.Provider value={countryData}>
      {props.children}
    </CountryDataContext.Provider>
  );
}
