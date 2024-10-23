import styled from "styled-components";

export const StyledLinktext = styled.div`
  a {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primeColor};
  }
  span {
    color: ${(props) => props.theme.colors.textColor};
  }
  a {
    color: var(--prime-color);
    font-size: calc(0.4vw + 8px);
  }
`;
