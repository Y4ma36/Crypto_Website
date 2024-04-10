import React from "react";
import styled from "styled-components";
import { Line } from "../../Style/CommonStyle";

const Log = styled.div`
  display: flex;
  align-items: center;
`;

const LogInBtn = styled.div`
  font-family: "Rubik", sans-serif;
  padding: 10px 10px;
  font-size: 1.13rem;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #dcdde1;
    border-radius: 10px;
    transition: 0.5s;
  }
`;

const Login = () => {
  return (
    <>
      <Log>
        <LogInBtn>Log In</LogInBtn>
        <Line colors="grey" />
        <LogInBtn>Sign In</LogInBtn>
      </Log>
    </>
  );
};

export default Login;
