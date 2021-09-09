import { useEffect, useState } from "react";
import styled from "styled-components";
// import axios from "axios";
import Card from "../Card/Card";

// Component Styling
const CardContainer = styled.div`
  margin-top: 2.5rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
`;

// const restCountryURL = "https://restcountries.eu/";

const CountryDirectory = () => {
  // TEST DATA
  const UsCountryURL =
    "https://restcountries.eu/rest/v2/name/united%20states%20of%20america";

  const initialValue = {
    name: "United States of America",
    flag: "https://restcountries.eu/data/usa.svg",
    population: 323947000,
    region: "Americas",
    capital: "Washington, D.C.",
  };

  const [countryData, setCountryData] = useState(initialValue);
  const { name, flag, population, region, capital } = countryData;

  return (
    <CardContainer>
      <Card
        name={name}
        flag={flag}
        population={population}
        region={region}
        capital={capital}
      />
    </CardContainer>
  );
};

export default CountryDirectory;

/*
    1. Set up state for country data
    2. Call API to retrieve data
*/
