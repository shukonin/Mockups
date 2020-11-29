import styled from "styled-components";

const StyledLoginConection = styled.p`
  font-size: 0.5rem;
  color: darkgray;
`;

const StyledLoginAnchorText = styled.a`
  text-decoration: none;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;

export { StyledLoginAnchorText, StyledLoginConection };
