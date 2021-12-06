import styled from "styled-components";

import { useAxios } from "../../hooks/useAxios";

import CountryDetailStats from "./CountryDetailStats.js";

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
  const { countryCode } = props;

  // Find correct URL to send to useAxios
  const apiParams = { url: `/alpha/${countryCode}` };
  const { response: countryInfo, loading, error } = useAxios(apiParams);

  let name = "",
    flag = "";
  let flagImageAlternateText = "";

  if (!loading && error === "" && countryInfo) {
    name = countryInfo.name;
    flag = countryInfo.flags.svg;
    flagImageAlternateText = `The flag of ${name}`;
  }

  return (
    <CountryDetails>
      {!loading && error === "" && countryInfo ? (
        <>
          <Flag src={flag} alt={flagImageAlternateText} />
          <CountryDetailStats countryDetail={countryInfo} />
        </>
      ) : (
        ""
      )}
    </CountryDetails>
  );
};

export default CountryDetailCard;
