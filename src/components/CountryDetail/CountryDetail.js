import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import backArrow from "../../images/back-arrow.svg";

import CountryDetailCard from "./CountryDetailCard";

const DetailContainer = styled.div``;

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
  font-family: ${(props) => props.theme.fonts.main};
  cursor: pointer;
  border: none;
  box-shadow: 0 0 6px 2px ${(props) => props.theme.colors.dropShadow};
  background-color: white;
`;

const CountryDetail = () => {
  // Extract country Name parameter
  let { name } = useParams();

  // useHistory hook and Back button click handler function
  const history = useHistory();
  const handleBackButtonClick = () => {
    history.push("/");
  };

  return (
    <DetailContainer>
      <HomeReturnButton type="button" onClick={handleBackButtonClick}>
        <BackArrowIcon src={backArrow} alt="" />
        Back
      </HomeReturnButton>

      <CountryDetailCard countryName={name} />
    </DetailContainer>
  );
};

export default CountryDetail;
