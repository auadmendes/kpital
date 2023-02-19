import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  
  margin: 0 auto;

margin-top: 10rem;
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 500px;
  width: 500px;

  background: ${({ theme }) => theme.colors.third};

  h1 {
    color: ${({ theme }) => theme.colors.button};

    span {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;


export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //height: 500px;
  
  

  padding: 3rem;

  background: ${({ theme }) => theme.colors.gray_700};

  span {
    font-size: 2rem;
  }

  p {
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.gray_300};
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-top: 2rem;
    gap: 0.15rem;

    input {
      width: 100%;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.colors.gray_600};
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.gray_600};

      border-radius: 4px;
    }

    textarea {
      width: 100%;
      height: 120px;
      border: 1px solid ${({ theme }) => theme.colors.gray_600};
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.gray_600};
    }

    button {
      margin-top: 1rem;
      width: 100%;
      height: 40px;
      border: 0;
      background: ${({ theme }) => theme.colors.button};
    }
  }
`;