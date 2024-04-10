import styled from "styled-components";

export const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
`;

export const Line = styled.span`
  height: 1rem;
  width: 1px;
  background-color: ${({ colors }) => colors};
  margin: 0px 5px;
  &:last-child {
    display: none;
  }
`;
