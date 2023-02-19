import styled from 'styled-components'

export const Container = styled.div`
 
  padding: 2rem;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.text};

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
  }

  span {
    color: ${({ theme }) => theme.colors.button};
    font-size: 2rem;
  }

`;

export const Menu = styled.div`
  margin-top: 1rem;
  display: flex;

  flex-direction: row;
  gap: 1rem;

    a {
      text-decoration: none;
      color:  ${({ theme }) => theme.colors.text};
      //text-transform: uppercase;

      &:hover {
      color:  ${({ theme }) => theme.colors.button};
    }
    }

`;