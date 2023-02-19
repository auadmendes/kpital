import { Challenge } from "../../components/Challenge";
import { HeroBanner } from "../../components/HeroBanner";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <HeroBanner />
      <Challenge />
    </Container>
  )
}