import { useContext } from "react";
import styled from "styled-components";
import Card from "../Card/Card";

import { CountryDataContext } from "../../contexts/CountryDataContext";
import { CountryFilterContext } from "../../contexts/CountryFilterContext";

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
  const { countryData } = useContext(CountryDataContext);

  // Retrieve search input value for filtering API data
  const { countryFilter } = useContext(CountryFilterContext);
  const { searchTerm, region } = countryFilter;
  // Iterate over the collection of objects in countryData
  // Filter if there are any filter flags present

  const CountryCards = Object.entries(countryData)
    .filter((data) => {
      if (region.length > 0) {
        const regionName = data[1].region.toLowerCase();

        if (regionName.includes(region.toLowerCase())) {
          // This will return a filtered data set with countries with corresponding region
          return data;
        }
      } else {
        // This will return an unfiltered data set
        return data;
      }
    })
    .filter((data) => {
      if (searchTerm.length > 0) {
        const countryName = data[1].name.toLowerCase();

        if (countryName.includes(searchTerm.toLowerCase())) {
          // This will return a filtered data set with countries that have the search term in it's name
          return data;
        }
      } else {
        // This will return an unfiltered data set
        return data;
      }
    })
    .map((data, index) => {
      const { name, flags, population, region, capital } = data[1];

      return (
        <Card
          key={index}
          name={name}
          flag={flags.svg}
          population={population.toLocaleString("en", { useGrouping: true })}
          region={region}
          capital={capital}
        />
      );
    });

  return <CardContainer>{CountryCards}</CardContainer>;
};

export default CountryDirectory;
