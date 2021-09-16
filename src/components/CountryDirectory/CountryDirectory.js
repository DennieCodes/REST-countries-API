import { useContext } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { CountryDataContext } from "../../contexts/CountryDataContext";

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

const CountryDirectory = () => {
  // Retrieve country data from CountryDataContext
  const { countryData } = useContext(CountryDataContext);

  // Iterate over the collection of objects in countryData
  const CountryCards = Object.entries(countryData).map((data, index) => {
    const { name, flag, population, region, capital } = data[1];

    return (
      <Card
        key={index}
        name={name}
        flag={flag}
        population={population.toLocaleString("en", { useGrouping: true })}
        region={region}
        capital={capital}
      />
    );
  });

  return <CardContainer>{CountryCards}</CardContainer>;
};

export default CountryDirectory;
