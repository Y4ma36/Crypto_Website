import React from "react";
import styled from "styled-components";
import { fetchCoinsHistory } from "../../../Data/Api";
import { useQuery } from "@tanstack/react-query";

const Wrapper = styled.td`
  color: ${(props) => (props.positive ? "green" : "red")};
`;

const ChangePercentage = ({ coinInfo }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["coinHistory", coinInfo],
    queryFn: () => fetchCoinsHistory(coinInfo.uuid),
  });

  return (
    <Wrapper positive={data?.data?.change >= 0}>
      <h3>{data?.data?.change}%</h3>
    </Wrapper>
  );
};

export default ChangePercentage;
