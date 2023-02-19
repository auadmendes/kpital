import { Article, Barbell, BeerBottle, Heartbeat, PersonSimpleRun, SquareHalf, Student, Wind } from "phosphor-react";
import {
  Container,
  Button,
  Hero,
  Pricing,
  Address,
  TimeBox,
  Times,
  Activities,
  ActivityContainer,
  Experience
} from "./styles";

export function Plan() {
  return (
    <Container>
      <Button>Começar agora</Button>

      <Hero>
        <Pricing>
          <Address>
            <span>Rua projetada n200 Porto Canoa Serra ES </span>
            <strong>ver no mapa</strong>
          </Address>
          <TimeBox>
            <strong>Horário de funcionamento</strong>
            <Times>
              <div>
                <span>Seg a Sex</span>
                <span>Sab</span>
                <span>Dom/Feriados</span>
              </div>

              <div>
                <span>06h - 23h</span>
                <span>06 - 12h</span>
                <span>Fique atendo ao nosso feed</span>
              </div>
            </Times>
          </TimeBox>
        </Pricing>

        <Activities>
          <strong>Experência na unidade</strong>
          <ActivityContainer>
            <Experience>
              <PersonSimpleRun size={32} />
              <span>Aulas de <br /> ginástica</span>
            </Experience>
            <Experience>
              <Heartbeat size={32} />
              <span>Caardio</span>
            </Experience>
            <Experience>
              <BeerBottle size={32} />
              <span>Energi drink</span>
            </Experience>
            <Experience>
              <Barbell size={32} />
              <span>Melhores <br /> </span>
            </Experience>
          </ActivityContainer>

          <strong>Diferenciais</strong>
          <ActivityContainer>
            <Experience>
              <SquareHalf size={32} />
              <span>Armários</span>
            </Experience>
            <Experience>
              <Student size={32} />
              <span>Professores <br /> formados  </span>
            </Experience>
            <Experience>
              <Wind size={32} />
              <span>Ar-condicionado</span>
            </Experience>
            <Experience>
              <Article size={32} />
              <span>Acompanhamento  <br /> com ficha </span>
            </Experience>
          </ActivityContainer>

        </Activities>
      </Hero>
    </Container >
  )
}