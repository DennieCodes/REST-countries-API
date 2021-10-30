import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CountryDataContext } from "../../contexts/CountryDataContext.js";

const CountryBorders = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.54rem;
  flex-basis: 100%;

  @media (min-width: 992px) {
    margin-top: clamp(1.54rem, 13%, 4.75rem);
  }
`;

const CountryBorderLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.625rem;
  row-gap: 1.15rem;
`;

const CountryBorderLabel = styled.h3`
  font-size: 1;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const CountryLink = styled(Link)`
  font-size: 0.875rem;
  line-height: 0.875rem;

  cursor: pointer;
  box-shadow: 0 0 6px 2px ${({ theme }) => theme.dropShadowColor};
  background-color: ${({ theme }) => theme.elementsBG};
  color: ${({ theme }) => theme.textColor};

  padding: 0.625rem 2.5%;
  text-align: center;

  min-width: 6rem;

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

// CountryDetailBorderSection Component
const CountryDetailBorderSection = (props) => {
  const borders = props.borders;
  const countryData = useContext(CountryDataContext);

  // Iterate through any country code items in borders array, find corresponding entry in countryData
  // Retrieve the name of the country and build array of countrylinks
  const borderCountryLinks = borders.map((code) => {
    const borderCountryEntry = countryData.filter((data) => {
      return data.alpha3Code === code;
    });

    const countryName = borderCountryEntry[0].name;
    const countryUrl = "/country/" + countryName;

    return (
      <CountryLink key={code} to={countryUrl}>
        {countryName}
      </CountryLink>
    );
  });

  return (
    <CountryBorders>
      <CountryBorderLabel>Border Countries:</CountryBorderLabel>
      <CountryBorderLinks>
        {borderCountryLinks.length > 0 ? borderCountryLinks : "None"}
      </CountryBorderLinks>
    </CountryBorders>
  );
};

export default CountryDetailBorderSection;
