import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchCoins, iconCoins } from "../../../Data/Api";
import styled from "styled-components";
import { headers } from "../../../Data/HomeOverviewData";
import OverviewChart from "./OverviewChart";
import ChangePercentage from "./ChangePercentage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
`;

const Title = styled.div`
  text-align: center;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 10px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 100px;
  h3 {
    font-size: 1.5rem;
  }
`;

const SubTitle = styled.div`
  font-size: 4rem;
  width: 70%;
  text-align: center;
  font-weight: 500;
  margin-top: 50px;
`;

const Col = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 50px;
`;

const TableHead = styled.thead`
  text-align: left;
  opacity: 0.7;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  th {
    font-size: 1.3rem;
    padding: 10px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  td {
    font-size: 1.5rem;
    vertical-align: middle;
    width: 25%;
  }
`;

const CoinIcon = styled.span`
  img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
  }
`;
const CoinName = styled.span`
  margin-left: 10px;
  vertical-align: middle;
`;
const CoinSymbol = styled.span`
  margin-left: 10px;
  opacity: 0.5;
  vertical-align: middle;
`;

const CoinChart = styled.td``;

const Overview = () => {
  const { data: coins } = useQuery({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  return (
    <>
      <Wrapper>
        <Col>
          <Section>
            <Title>
              <h3>Over 100 Coins</h3>
            </Title>
            <SubTitle>
              <h1>Explore live price updates for top cryptocurrencies.</h1>
            </SubTitle>
          </Section>
        </Col>
        <Col>
          <Section>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <th key={header.value}>{header.text}</th>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {coins?.data?.coins.slice(0, 6).map((coin) => (
                  <TableRow key={coin.rank}>
                    <td>
                      <CoinIcon>
                        {
                          <img
                            src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                            alt="coin_icon"
                          />
                        }
                      </CoinIcon>
                      <CoinName>{coin.name}</CoinName>
                      <CoinSymbol>{coin.symbol}</CoinSymbol>
                    </td>
                    <td>
                      <h3>${Math.floor(coin.price * 100) / 100}</h3>
                    </td>
                    <td>
                      <ChangePercentage coinInfo={coin} />
                    </td>
                    <CoinChart>
                      <OverviewChart coinInfo={coin} />
                    </CoinChart>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Section>
        </Col>
      </Wrapper>
    </>
  );
};

export default Overview;
