import { useEffect, useState } from "react";
import styled from "styled-components";
// import axios from "axios";
import Card from "../Card/Card";

import usa from "../../images/usa.svg";

// Component Styling
const CardContainer = styled.div`
  margin-top: 2.5rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem 4.75rem;

  @media (min-width: 716px) {
    gap: 4.75rem;
  }
`;

// const restCountryURL = "https://restcountries.eu/";

const CountryDirectory = () => {
  // TEST DATA
  // const UsCountryURL = "https://restcountries.eu/rest/v2/name/united%20states%20of%20america";

  const initialValue = {
    name: "United States of America",
    flag: usa,
    population: 323947000,
    region: "Americas",
    capital: "Washington, D.C.",
  };

  // NOTE: flag should be the URL, for dev purposes I've saved local copy of SVG image rather than spam API
  // flag: "https://restcountries.eu/data/usa.svg",

  const [countryData, setCountryData] = useState(initialValue);
  const { name, flag, population, region, capital } = countryData;

  // Format population size with comma separaters
  const formattedPopulation = population.toLocaleString("en", {
    useGrouping: true,
  });

  // Sample data for layout
  const Cards = new Array(8);
  for (let i = 0; i < 8; i++) {
    Cards[i] = (
      <Card
        key={i}
        name={name}
        flag={flag}
        population={formattedPopulation}
        region={region}
        capital={capital}
      />
    );
  }

  return <CardContainer>{Cards}</CardContainer>;
};

export default CountryDirectory;
