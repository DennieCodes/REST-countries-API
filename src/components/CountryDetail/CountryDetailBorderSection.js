import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CountryDataContext } from "../../contexts/CountryDataContext";

const CountryBorderLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1.54rem;
  gap: 0.625rem;
  row-gap: 1.15rem;
`;

const CountryLink = styled(Link)`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 0.875rem;
  line-height: 0.875rem;

  cursor: pointer;
  box-shadow: 0 0 6px 2px ${(props) => props.theme.colors.dropShadow};
  background-color: white;
  color: black;

  padding: 0.625rem 2.5%;
  text-align: center;

  min-width: 6rem;
`;

// CountryDetailBorderSection Component
const CountryDetailBorderSection = (props) => {
  const borders = props.borders;
  const { countryData } = useContext(CountryDataContext);

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

  return <CountryBorderLinks>{borderCountryLinks}</CountryBorderLinks>;
};

export default CountryDetailBorderSection;
