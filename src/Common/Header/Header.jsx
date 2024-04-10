import React from "react";
import { MaxWidthWrapper } from "../../Style/CommonStyle";
import styled from "styled-components";
import logo from "../../Assets/logo.png";
import NavItems from "./NavItems";
import Login from "./Login";
import { RiMenu4Fill } from "react-icons/ri";

const NavContainer = styled.div`
  height: 6rem;
  padding: 10px 0px;

  width: 100%;
  @media ${({ theme }) => theme.device.desktop} {
    padding: 10px 35px;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const NavList = styled.div`
  &:not(:first-child) {
    @media ${({ theme }) => theme.device.tablet} {
      display: none;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
  .menuLogo {
    font-size: 2.5rem;
  }
`;

const Logo = styled.div`
  img {
    width: 5rem;
    height: 5rem;
  }
  margin-bottom: 10px;
`;

const Header = () => {
  return (
    <NavContainer>
      <MaxWidthWrapper>
        <Nav>
          <NavList>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
          </NavList>
          <NavList>
            <NavItems />
          </NavList>
          <NavList>
            <Login />
          </NavList>
          <MobileMenu>
            <RiMenu4Fill className="menuLogo" />
          </MobileMenu>
        </Nav>
      </MaxWidthWrapper>
    </NavContainer>
  );
};

export default Header;
