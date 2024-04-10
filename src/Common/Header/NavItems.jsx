import React from "react";
import styled from "styled-components";
import { navItems } from "../../Data/NavListItem";
import { Link } from "react-router-dom";
import { Line } from "../../Style/CommonStyle";

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

const NavItems = () => {
  return (
    <>
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
    </>
  );
};

export default NavItems;
