import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: stretch;
flex-direction: column;
margin-top: 4rem;
margin-bottom: 4rem;
padding-top: 2rem;
border-top: 1px solid ${({ theme }) => theme.colors.third};

span {
  color: ${({ theme }) => theme.colors.button};
}
`;

export const ChallengeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;

  gap: 2rem;
`;
export const ChallengeItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  
  background: ${({ theme }) => theme.colors.gray_300};
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100px;
  padding: 2rem 0.25rem;
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.gray_700};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.dark_green};
  color: ${({ theme }) => theme.colors.text};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1.5rem;

  gap: 1rem;

  background: ${({ theme }) => theme.colors.gray_600};
`;
