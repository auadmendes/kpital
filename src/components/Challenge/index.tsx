import { Barbell, PaperclipHorizontal } from "phosphor-react";
import { Container, ChallengeContainer, ChallengeItem, Box, Content } from "./styles";


export function Challenge() {
  return (
    <Container>
      <h1>Kpital <span>challanges</span></h1>

      <strong>Corrida de 5 km praia de Jacaraípe</strong>
      <ChallengeContainer>

        <ChallengeItem>
          <Box>
            <Barbell size={32} />
          </Box>
          <Content>
            <span>Descrição</span>
            <p>O desafio é correr 5km - 2.5km ida 2.5km volta na praia de Jacaraípe, próximo a ponte encontro das águas</p>
          </Content>
        </ChallengeItem>
        <ChallengeItem>
          <Box>
            <PaperclipHorizontal size={32} />
          </Box>
          <Content>
            <span>Material complementar</span>
            <p>Preencha seus dados para participar e receba uma bela dieta para o dia do Kpital challenge</p>
          </Content>
        </ChallengeItem>
      </ChallengeContainer>
    </Container>
  )
}