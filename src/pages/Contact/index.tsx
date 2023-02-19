import { Barbell } from "phosphor-react"
import { BoxImage, Container, ContactBox } from "./styles"

export function Contact() {
  return (
    <Container>
      <BoxImage>
        {/* <img src="/src/assets/workout4.jpg" alt="" /> */}
        <Barbell size={32} />
        <h1>Kpital <span>Fitness</span></h1>

      </BoxImage>

      <ContactBox>
        <span>Olá! Seja Bem vindo</span>
        <p>Nos enviei uma mensagem com sua dúvida ou sugestão e ficaremos uito feliz em ajudar</p>

        <form>
          <input type="text" placeholder="Digite seu nome" />
          <input type="text" placeholder="Digite seu melhor email" />
          <textarea name=""></textarea>
          <button>Enviar</button>
        </form>
      </ContactBox>
    </Container>
  )
}