import styled from "styled-components";

export const StyleWrongPassword = styled.div`
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.bgc};
  margin: 40px auto;
  width: 80%;
  max-width: 400px;
  text-align: center;
  padding: 40px;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray};
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #c1c6d3;
    border-radius: 10px;
  }

  
`;
