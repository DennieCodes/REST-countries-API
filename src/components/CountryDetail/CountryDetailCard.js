import { useContext } from "react";
import styled from "styled-components";

import CountryDetailStats from "./CountryDetailStats";
import { CountryDataContext } from "../../contexts/CountryDataContext";

const CountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
`;

const Flag = styled.img`
  height: 14.25rem;
  width: 20rem;
  object-fit: cover;
`;

// CountryDetailCard Component
const CountryDetailCard = (props) => {
  const { countryName } = props;
  // Retrieve country data from CountryDataContext
  const { countryData } = useContext(CountryDataContext);

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
