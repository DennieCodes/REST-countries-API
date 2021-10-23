import styled from "styled-components";
import CountryDetailBorderSection from "./CountryDetailBorderSection";

// Component Styling
const CountryDetailsInfo = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const CountryName = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(1.25rem, 5vw, 1.5rem);
  font-weight: 800;
  flex-basis: 100%;
`;

const CountryStat = styled.p`
  font-size: 0.875rem;
  line-height: 2.2rem;

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

const CountryDetailsMainInfo = styled.div``;

const CountryDetailsSubInfo = styled.div`
  margin-top: 1.54rem;

  @media (min-width: 600px) {
    margin-top: 0;
  }
`;

// CountryDetailStats Component
const CountryDetailStats = (props) => {
  const {
    name,
    borders,
    population,
    region,
    capital,
    subregion,
    currencies,
    languages,
    topLevelDomain,
  } = props.countryDetail;

  const countryCurrencies = currencies.map((data) => data.name).join(", ");
  const countryLanguages = languages.map((data) => data.name).join(", ");

  return (
    <CountryDetailsInfo>
      <CountryName>{name}</CountryName>
      <CountryDetailsMainInfo>
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
      </CountryDetailsMainInfo>

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
  );
};

export default CountryDetailStats;
