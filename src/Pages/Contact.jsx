import React from "react";
import { MaxWidthWrapper } from "../Style/CommonStyle";
import styled from "styled-components";
import backgroundImg from "../Assets/aboutus1.jpeg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const ContactLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  margin-left: 50px;
  h1 {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  input {
    width: 300px;
    padding: 20px 10px;
    margin-bottom: 20px;
  }

  button {
    width: 320px;
    padding: 20px 10px;
    background-color: black;
    color: white;
  }
`;

const ContactRight = styled.div`
  flex: 1.5;
  img {
    width: 90%;
    height: 100%;
    object-fit: cover;
  }
`;

const Contact = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <Container>
          <ContactLeft>
            <h1>GET IN TOUCH</h1>
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="How can we help you?" />
            <button>SEND</button>
          </ContactLeft>
          <ContactRight>
            <img src={backgroundImg} alt="" />
          </ContactRight>
        </Container>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
