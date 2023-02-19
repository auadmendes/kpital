import { Container, Hero, Banner } from "./styles";

export function HeroBanner() {
  return (
    <Container>
      <Hero>
        <span>Fitness Club</span>
        <div>
          <strong>Transpire, Sorria </strong>
          <strong>e Repita</strong>
        </div>

        < p > Instrutores preparados para te ajudar com os exercícios mas efetivos</p>

        <button>Ver minha lista de exercícios</button>
      </Hero>
      <Banner>
        <img src="./src/assets/banner1.jpg" alt="" />
      </Banner>
    </Container>
  )
}