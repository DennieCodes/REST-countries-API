import styled from "styled-components";
import { Link } from "react-router-dom";

import { useAxios } from "../../hooks/useAxios";

const BorderCountryLink = styled(Link)`
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

const CountryLink = (props) => {
  const { countryCode } = props;

  const apiParams = { url: `/alpha/${countryCode}` };

  const { response: countryInfo, loading, error } = useAxios(apiParams);

  let countryName = "";
  let countryUrl = "";

  if (!loading && error === "" && countryInfo) {
    const { alpha3Code } = countryInfo;
    countryName = countryInfo.name;
    countryUrl = `/country/${alpha3Code}`;
  }

  return <BorderCountryLink to={countryUrl}>{countryName}</BorderCountryLink>;
};

export default CountryLink;
