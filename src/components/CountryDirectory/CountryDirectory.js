import { useContext } from "react";
import styled from "styled-components";
import Card from "../Card/Card";

import { CountryDataContext } from "../../contexts/CountryDataContext.js";
import { CountryFilterContext } from "../../contexts/CountryFilterContext.js";

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
  // Retrieve country data from CountryDataContext
  // const countryData = useContext(CountryDataContext);
  let parsedCountryData = useContext(CountryDataContext);

  // Retrieve search input value for filtering API data
  const { countryFilter } = useContext(CountryFilterContext);
  const { searchTerm, region } = countryFilter;

  // Iterate over the collection of objects in countryData
  // Filter if there are any filter flags present

  // Check presence of region selection and filter parsedCountryData
  if (region.length > 0) {
    parsedCountryData = parsedCountryData.filter((data) => {
      return data.region.toLowerCase().includes(region.toLowerCase());
    });
  }

  // Check presence of search input data and if present filter parsedCountryData further
  if (searchTerm.length > 0) {
    parsedCountryData = parsedCountryData.filter((data) => {
      return data.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  const CountryCards =
    parsedCountryData === ""
      ? ""
      : parsedCountryData.map((data, index) => {
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
        });

  return <CardContainer>{CountryCards}</CardContainer>;
};

export default CountryDirectory;
