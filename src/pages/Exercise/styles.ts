import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
  margin: 0 auto;
  width: 100%;
  
`;

export const Carousel = styled.div`
  cursor: grab;
  overflow: hidden;
  max-width: 1200px;

  @media(max-width:720px) {
    max-width: 500px;
  }
`;
export const CarouselBodyParts = styled.div`
  cursor: grab;
  overflow: hidden;
  max-width: 1200px;
  width: 100%;
  height: 200px;

  margin-top: 1.5rem;


  

  @media(max-width:720px) {
    max-width: 500px;
  }
`;

export const Inner = styled.div`
  display: flex;
  gap: 0.15rem;
  margin-bottom: 0.5rem;
`;
export const Item = styled.div`
  min-height: 200px;
  min-width: 400px;
  padding: 1rem;

  color: ${({ theme }) => theme.colors.text};

  background: transparent;
  border: 0;

  img {
    width: 100%;
    height: 90%;
    border: 0;
    border-radius: 7px;
    pointer-events: none;
    background: transparent;
  }
`;
export const ItemBodyPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;

  min-height: 150px;
  min-width: 200px;
  padding: 1rem;
  border: 0;

  background: ${({ theme }) => theme.colors.gray_700};
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.gray_700};
  }
`;

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0.15rem;

  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 7px;
  overflow: hidden;
  max-width: 1200px;

  input {
    background: ${({ theme }) => theme.colors.gray_700};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;
    padding: 0.15rem;
    width: 100%;
    height: 3rem;
    border: 0;
  }

  button {
    background: transparent;
    border: 0;
    margin-left: -2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};


    &:hover {
      color: ${({ theme }) => theme.colors.button};
    }
  }
`;