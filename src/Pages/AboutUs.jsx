import React from "react";
import { MaxWidthWrapper } from "../Style/CommonStyle";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import lottieJson from "../Assets/aboutus.json";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 150px;
`;

const AboutUsLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  h1 {
    font-size: 40px;
    font-weight: 600;
  }
  p {
    font-size: 18px;
    font-weight: 300;
  }
`;

const AboutUsRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const AboutUs = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <Container>
          <AboutUsLeft>
            <h1>Welcome to Crypto</h1>
            <p>
              At Crypto, we're passionate about providing you with real-time
              cryptocurrency price information to help you navigate the volatile
              world of digital assets. Our mission is to empower individuals and
              businesses with the tools and insights they need to make informed
              decisions in the cryptocurrency market.
            </p>
            <h1>Our Team</h1>
            <p>
              Crypto was founded by a team of experienced professionals with
              backgrounds in finance, technology, and cryptocurrency. We're
              dedicated to leveraging our expertise to create a user-friendly
              platform that delivers accurate and reliable price data to our
              users.
            </p>
          </AboutUsLeft>
          <AboutUsRight>
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 400, height: 400 }}
            ></Lottie>
          </AboutUsRight>
        </Container>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutUs;
