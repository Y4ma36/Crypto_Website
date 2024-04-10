import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import styled from "styled-components";
import { Line } from "../../../Style/CommonStyle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${({ theme }) => theme.device.tablet} {
    align-items: center;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 4rem;
  span {
    color: #49a7fb;
  }
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const Overview = styled.span`
  width: 65%;
  font-size: 1.5rem;
  opacity: 0.7;
  padding: 20px 5px;
  line-height: 2.3rem;
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    line-height: 1.5rem;
    font-size: 1rem;
    text-align: center;
  }
`;

const PricesBtn = styled.div`
  display: flex;
  padding: 20px 5px;
  @media ${({ theme }) => theme.device.tablet} {
    justify-content: center;
  }
`;

const Prices = styled.div`
  display: flex;
  align-items: center;
  background-color: #0074c2;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 20px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 1rem;
  }
`;
const LeftSection = () => {
  return (
    <Wrapper>
      <Title>
        <h1>
          Discover the world of <span> cryptocurrencies</span>
        </h1>
      </Title>
      <Overview>
        Your ultimate destination for real-time crypto prices, interactive
        charts, and valuable insights into the dynamic world of digital
        currencies.
      </Overview>
      <PricesBtn>
        <Prices>
          <span>Check Prices</span>
          <Line colors="white" />
          <FaLongArrowAltRight />
        </Prices>
      </PricesBtn>
    </Wrapper>
  );
};

export default LeftSection;
