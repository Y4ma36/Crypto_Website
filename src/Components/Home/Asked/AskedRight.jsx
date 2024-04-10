import React, { useState } from "react";
import styled from "styled-components";
import { Questions } from "../../../Data/AskedQuestion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "Rubik", sans-serif;
`;

const Col = styled.div``;

const Title = styled.div`
  font-size: 3rem;

  font-weight: bold;
`;

const QuestionsList = styled.div`
  ul {
  }
  li {
    font-size: 1.5rem;
    font-weight: 400;
    width: 100%;
    span {
      float: right;
      padding-right: 15px;
    }
    margin-top: 75px;
  }
`;

const Question = styled.div``;

const Answer = styled.div`
  font-size: 1.2rem;
  opacity: 0.7;
  display: none;
`;

const AskedRight = () => {
  const [view, setView] = useState(Array(Questions.length).fill(false));
  const handleView = (index) => {
    setView((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  console.log(view);
  return (
    <Wrapper>
      <Col>
        <Title>Frequently Asked</Title>
      </Col>
      <Col>
        <QuestionsList>
          <ul>
            {Questions.map((list, index) => (
              <>
                <li key={list.question}>
                  <Question>
                    {list.question}
                    <span onClick={() => handleView(index)}>
                      {view[index] ? "-" : "+"}
                    </span>
                  </Question>
                  <Answer>{list.answer}</Answer>
                </li>
              </>
            ))}
          </ul>
        </QuestionsList>
      </Col>
    </Wrapper>
  );
};

export default AskedRight;
