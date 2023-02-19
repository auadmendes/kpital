import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media(max-width:720px) {
    flex-direction: column;
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;

  span {
    color: ${({ theme }) => theme.colors.gray_300};  
  }

  strong {
    display: flex;
    flex-direction: column;
    line-height: 3.5rem;

    font-size: 2.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray_400};  
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
    padding: 0.5rem 1rem;

    border: 0;
    border-radius: 2px;

    cursor: pointer;

    transition: background-color 0.2s ;

    &:hover {
      background: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const Banner = styled.div`

img {
  width: 23rem;
  height: 35rem;
}
`;