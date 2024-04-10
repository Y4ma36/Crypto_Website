import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import lottieJson from "../../../Assets/mainLotti.json";
import LeftSection from "../../Home/Welcome/LeftWelcomeSection";

const Col = styled.section`
  display: flex;
  font-family: "Rubik", sans-serif;
`;

const Right = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.laptop} {
    width: 70%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const Welcome = () => {
  return (
    <>
      <Col>
        <LeftSection />
      </Col>
      <Col>
        <Right>
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 600, height: 600 }}
          />
        </Right>
      </Col>
    </>
  );
};

export default Welcome;
