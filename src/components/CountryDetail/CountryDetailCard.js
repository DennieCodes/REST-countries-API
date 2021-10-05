import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import CountryDetailStats from "./CountryDetailStats";
import { CountryDataContext } from "../../contexts/CountryDataContext";

const CountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 clamp(1.5rem, 10%, 5rem);
`;

const Flag = styled.img`
  width: 100%;
  max-width: 35rem;
`;

// CountryDetailCard Component
const CountryDetailCard = (props) => {
  const { countryName } = props;
  // Retrieve country data from CountryDataContext
  const { countryData } = useContext(CountryDataContext);

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
