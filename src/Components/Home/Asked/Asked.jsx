import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import lottieJson from "../../../Assets/submain2Lotti.json";
import AskedRight from "./AskedRight";

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 100px;
  gap: 20px;
  margin-top: 100px;
`;

const Col = styled.div`
  &:first-child {
  }
  &:last-child {
    width: 100%;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div``;

const Asked = () => {
  return (
    <Wrapper>
      <Col>
        <Left>
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 650, height: "100%" }}
          />
        </Left>
      </Col>
      <Col>
        <Right>
          <AskedRight />
        </Right>
      </Col>
    </Wrapper>
  );
};

export default Asked;
