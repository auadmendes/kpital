import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 1200px;
  margin: 0 auto;
  height: 500px;
  margin-top: 5rem;

  max-width: 1200px;
  gap: 2rem;
`;

export const Button = styled.button`
  padding: 0.5rem 2rem;
  border: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.gray_700};
  font-size: 1.5rem;
  text-transform: uppercase;

  margin-bottom: 2rem;

  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.dark_green};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 5rem;
`;

export const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Address = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;
  margin-bottom: 2rem;

  strong {
    color: ${({ theme }) => theme.colors.button};
  }
`;

export const TimeBox = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem ;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  border-radius: 4px;
`;

export const Times = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    padding: 0.15rem;

    gap: 0.25rem
  }
`;

export const Activities = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const ActivityContainer = styled.div`
  display: flex;
  
  align-items: center;
  gap: 2rem;
  margin-bottom: 0.25rem;
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  span {
    text-align: center;
  }
`;
