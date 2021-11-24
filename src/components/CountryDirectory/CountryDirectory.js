import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Card/Card";

import { CountryDataContext } from "../../contexts/CountryDataContext.js";
import { CountryFilterContext } from "../../contexts/CountryFilterContext.js";

import { useAxios } from "../../hooks/useAxios";

// Component Styling
const CardContainer = styled.div`
  margin: 4rem 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem 4.75rem;

  @media (min-width: 716px) {
    gap: 4.75rem;
  }
`;

const CountryDirectory = () => {
  // https://restcountries.com/v2/region/africa
  // https://restcountries.com/v2/name/aruba

  // Retrieve search input value and region for filtering API data (if exists)
  const {
    countryFilter: { searchTerm, region },
  } = useContext(CountryFilterContext);

  const apiParams = { url: "/all" };

  // Change the URL if either searchTerm or Region are present

  // Make sure only region or search is active

  if (searchTerm) apiParams.searchTerm = searchTerm;

  if (region) apiParams.url = `/region/${region}`;

  const { response: countryData, loading, error } = useAxios(apiParams);

  const CountryCards =
    !loading && error === "" && countryData
      ? countryData.map((data, index) => {
          const { name, flags, population, region, capital } = data;

          return (
            <Card
              key={index}
              name={name}
              flag={flags.svg}
              population={population.toLocaleString("en", {
                useGrouping: true,
              })}
              region={region}
              capital={capital}
            />
          );
        })
      : "";

  return <CardContainer>{CountryCards}</CardContainer>;
};

export default CountryDirectory;
