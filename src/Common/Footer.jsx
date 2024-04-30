import React from "react";
import { Line, MaxWidthWrapper } from "../Style/CommonStyle";
import styled from "styled-components";
import { navItems } from "../Data/NavListItem";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  background-color: #dfe6e9;
`;

const Container = styled.div`
  display: flex;
  height: 50vh;
`;

const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 10px;
  }
`;

const FooterRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavListItems = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  font-family: "Rubik", sans-serif;
  padding: 10px 10px;
  font-size: 1.13rem;
  border-radius: 10px;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    background-color: #dcdde1;
    border-radius: 10px;
    transition: 0.5s;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Container>
          <FooterLeft>
            <h1>Start Your Adventure Today</h1>
            <p>
              Register now to explore the possibilites of cryptocurrency finance
              for your future
            </p>
          </FooterLeft>
          <FooterRight>
            <NavListItems>
              {navItems.map((item) => (
                <>
                  <Item key={item.path}>
                    <Link to={item.path}>{item.title}</Link>
                  </Item>
                  <Line colors="grey" />
                </>
              ))}
            </NavListItems>
          </FooterRight>
        </Container>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Footer;
