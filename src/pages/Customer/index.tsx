import { useParams } from "react-router-dom"
import { Container } from "./styles";


export function Customer() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <Container>
      <h1>Customer {slug}</h1>
    </Container>
  )
}