import styled from "styled-components";

export const StyleCodeEnter = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.bgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    margin-bottom: 50px;
  }
  from {
    display: flex;
    flex-direction: row;
    gap: 32px;
    &:input{
       width: 56px;
       height: 72px;
       background-color: #C1C6D3;
       border: none;
       border-radius: 8px;
    }
    .Linktext{
        color: ${props=>props.theme.colors.primeColor};
    }
  }
`;
