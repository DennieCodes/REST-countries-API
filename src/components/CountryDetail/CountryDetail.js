import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import ScrollToTop from "../../utils/ScrollToTop.js";
import backArrow from "../../images/back-arrow.svg";
import backArrowDark from "../../images/back-arrow-dark.svg";

import CountryDetailCard from "./CountryDetailCard.js";

const DetailContainer = styled.div`

@media (min-width: 992px) {
  padding 0 clamp(1rem, 6%,5rem);
}
`;

const BackArrowIcon = styled.img`
  height: 0.625rem;
  width: 0.625rem;
  margin-left: 1.5rem;
  margin-right: 0.625rem;
`;

const HomeReturnButton = styled.button`
  padding: 0.625rem 0;
  padding-right: 1.5rem;
  margin: 2.5rem 0 4rem 1.5rem;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 6px 2px ${({ theme }) => theme.dropShadowColor};
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.elementsBG};
`;

const CountryDetail = (props) => {
  const activeTheme = props.activeTheme;

  const activeBackIcon = activeTheme === "light" ? backArrow : backArrowDark;

  // Extract country code parameter
  let { code } = useParams();

  // useHistory hook and Back button click handler function
  const history = useHistory();
  const handleBackButtonClick = () => {
    history.goBack(1);
  };

  return (
    <DetailContainer>
      <ScrollToTop />
      <HomeReturnButton type="button" onClick={handleBackButtonClick}>
        <BackArrowIcon src={activeBackIcon} alt="" />
        Back
      </HomeReturnButton>

      <CountryDetailCard countryCode={code} />
    </DetailContainer>
  );
};

export default CountryDetail;
