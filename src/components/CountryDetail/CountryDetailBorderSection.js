import styled from "styled-components";
import CountryLink from "./CountryLink";

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

// CountryDetailBorderSection Component
const CountryDetailBorderSection = (props) => {
  const borders = props.borders;

  // Iterate through any country code items in borders array
  const borderCountryLinks = borders.map((code) => (
    <CountryLink key={code} countryCode={code} />
  ));

  return (
    <CountryBorders>
      <CountryBorderLabel>Border Countries:</CountryBorderLabel>
      <CountryBorderLinks>
        {borderCountryLinks.length > 0 ? borderCountryLinks : ""}
      </CountryBorderLinks>
    </CountryBorders>
  );
};

export default CountryDetailBorderSection;
