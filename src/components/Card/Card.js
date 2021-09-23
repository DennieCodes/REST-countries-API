import styled from "styled-components";

// Components Styling
const CountryCard = styled.div`
  box-shadow: 0 0 7px 0 ${(props) => props.theme.colors.dropShadow};
  border-radius: 5px;
  padding-bottom: 3rem;
  max-width: 16.5rem;
`;

const Flag = styled.img`
  border-radius: 5px 5px 0 0;
  height: 10rem;
  width: 16.5rem;
  object-fit: cover;
`;

const CountryInfo = styled.div`
  margin-top: 1.875rem;
  padding: 0 1.65rem;
`;

const CountryName = styled.h2`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 1rem;

  margin-bottom: 1.625rem;
`;

const CountryStat = styled.p`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

const Card = (props) => {
  const { name, flag, population, region, capital } = props;
  const flagInfo = `Flag of ${name}`;

  return (
    <CountryCard>
      <Flag src={flag} alt={flagInfo} />
      <CountryInfo>
        <CountryName>{name}</CountryName>
        <CountryStat>
          <strong>Population:</strong> {population}
        </CountryStat>
        <CountryStat>
          <strong>Region:</strong> {region}
        </CountryStat>
        <CountryStat>
          <strong>Capital:</strong> {capital}
        </CountryStat>
      </CountryInfo>
    </CountryCard>
  );
};

export default Card;
