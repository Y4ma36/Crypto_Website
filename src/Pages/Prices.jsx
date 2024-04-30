import React from "react";
import { useQuery } from "@tanstack/react-query";
import { MaxWidthWrapper } from "../Style/CommonStyle";
import { fetchCoins } from "../Data/Api";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 100px;
`;

const PricesBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin-top: 20px;
`;

const PricesBox = styled.div`
  display: flex;
  gap: 20px;
  width: 300px;
  height: 100px;
  background: #e1e1e1;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const CoinIcon = styled.div`
  img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
  }
`;

const CoinInfo = styled.div``;

const Prices = () => {
  const { data: coins } = useQuery({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  return (
    <div>
      <MaxWidthWrapper>
        <Container>
          <PricesBoxContainer>
            {coins?.data?.coins.slice(0, 100).map((coin) => (
              <PricesBox>
                <CoinIcon>
                  {
                    <img
                      src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                      alt="coin_icon"
                    />
                  }
                </CoinIcon>
                <CoinInfo>
                  <h1>Name: {coin.name}</h1>
                  <h2>Symbol: {coin.symbol}</h2>
                  <h2>Rank: {coin.rank}</h2>
                  <h1>Price: ${coin.price}</h1>
                </CoinInfo>
              </PricesBox>
            ))}
          </PricesBoxContainer>
        </Container>
      </MaxWidthWrapper>
    </div>
  );
};

export default Prices;
