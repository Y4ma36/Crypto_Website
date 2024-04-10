import React from "react";
import { Line, MaxWidthWrapper } from "../Style/CommonStyle";
import styled from "styled-components";
import Welcome from "../Components/Home/Welcome/Welcome";
import Overview from "../Components/Home/Overview/Overview";
import Asked from "../Components/Home/Asked/Asked";

const MainContainer = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 0px 50px;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;

const OverviewContainer = styled.div`
  width: 100%;
  background-color: #dfe6e9;
`;

const AskedContainer = styled.div``;

const Home = () => {
  return (
    <>
      <MaxWidthWrapper>
        <MainContainer>
          <Welcome />
        </MainContainer>
      </MaxWidthWrapper>
      <OverviewContainer>
        <MaxWidthWrapper>
          <Overview />
        </MaxWidthWrapper>
      </OverviewContainer>
      <AskedContainer>
        <MaxWidthWrapper>
          <Asked />
        </MaxWidthWrapper>
      </AskedContainer>
    </>
  );
};

export default Home;
