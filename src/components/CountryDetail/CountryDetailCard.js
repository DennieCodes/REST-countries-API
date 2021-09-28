import { useContext } from "react";
import styled from "styled-components";

import CountryDetailBorderSection from "./CountryDetailBorderSection";
import { CountryDataContext } from "../../contexts/CountryDataContext";

const CountryDetails = styled.div`
  margin: 0 1.5rem;
`;

const Flag = styled.img`
  height: 14.25rem;
  width: 20rem;
  object-fit: cover;
`;

const CountryDetailsInfo = styled.div`
  margin: 3rem 0;
  font-family: ${(props) => props.theme.fonts.main};
`;

const CountryDetailsSubInfo = styled.div`
  margin-top: 1.54rem;
`;

const CountryName = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 800;
`;

const CountryStat = styled.p`
  font-size: 0.875rem;
  line-height: 2.2rem;
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

  const {
    name,
    flags,
    population,
    region,
    capital,
    subregion,
    currencies,
    languages,
    topLevelDomain,
    borders,
  } = countryDetails[0];

  // Parse name from currencies and languages which are array of objects and then join with comma separator
  const countryCurrencies = currencies.map((data) => data.name).join(", ");
  const countryLanguages = languages.map((data) => data.name).join(", ");

  const flagImageAlternateText = `The flag of ${name}`;

  return (
    <CountryDetails>
      <Flag src={flags.svg} alt={flagImageAlternateText} />

      <CountryDetailsInfo>
        <CountryName>{name}</CountryName>
        <CountryStat>
          <strong>Population:</strong>{" "}
          {population.toLocaleString("en", { useGrouping: true })}
        </CountryStat>
        <CountryStat>
          <strong>Region:</strong> {region}
        </CountryStat>
        <CountryStat>
          <strong>Subregion:</strong> {subregion}
        </CountryStat>
        <CountryStat>
          <strong>Capital:</strong> {capital}
        </CountryStat>
        <CountryDetailsSubInfo>
          <CountryStat>
            <strong>Top level Domain:</strong> {topLevelDomain[0]}
          </CountryStat>

          <CountryStat>
            <strong>Currencies:</strong> {countryCurrencies}
          </CountryStat>

          <CountryStat>
            <strong>Languages:</strong> {countryLanguages}
          </CountryStat>
        </CountryDetailsSubInfo>

        <CountryDetailBorderSection borders={borders} />
      </CountryDetailsInfo>
    </CountryDetails>
  );
};

export default CountryDetailCard;
