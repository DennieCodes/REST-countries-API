import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import CountryDetailStats from "./CountryDetailStats";
import { CountryDataContext } from "../../contexts/CountryDataContext";

const CountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 clamp(1.5rem, 6%, 5rem);

  @media (min-width: 600px) {
    margin: 0 clamp(2.25rem, 10%, 5rem);
  }

  @media (min-width: 768px) {
    margin: 0 1.5rem;
    flex-direction: row;
    gap: 2rem;
  }

  @media (min-width: 992px) {
    margin: 0 clamp(2.25rem, 10 %, 5rem);
    gap: clamp(2rem, 8%, 7.625rem);
  }
`;

const Flag = styled.img`
  width: 100%;
  max-width: 35rem;

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`;

// CountryDetailCard Component
const CountryDetailCard = (props) => {
  const { countryName } = props;
  // Retrieve country data from CountryDataContext
  const countryData = useContext(CountryDataContext);

  // Check if countryData object from Context is valid and redirect if invalid
  if (!Array.isArray(countryData)) {
    return (
      <Route
        render={() => {
          <Redirect to={{ pathname: "/" }} />;
        }}
      />
    );
  }

  // Find the country corresponding to the one from params/props
  const countryDetails = countryData.filter((data) => {
    return data.name === countryName;
  });

  const { name, flags } = countryDetails[0];

  const flagImageAlternateText = `The flag of ${name}`;

  return (
    <CountryDetails>
      <Flag src={flags.svg} alt={flagImageAlternateText} />

      <CountryDetailStats countryDetail={countryDetails[0]} />
    </CountryDetails>
  );
};

export default CountryDetailCard;
