import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  //height: 100vh;

  margin: 0 auto ;
  padding-top: 2rem;

  //border: 1px solid red;

  h1 {
    color: ${({ theme }) => theme.colors.text};
  }
  
`;

