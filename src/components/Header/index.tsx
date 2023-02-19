
import { Container, Content, Menu } from "./styles";
import { Link, useParams } from 'react-router-dom';

export function Header() {
  const user = 'luciano.auad@gmail.com'
  return (
    <Container>
      <Content>
        <div>
          <strong>Kpital</strong> <span>Fitness</span>
        </div>
        <div>Login</div>
      </Content>
      <Menu>
        <Link to={'/'}>Home</Link>
        <Link to={'/Plan'}>Planos</Link>
        <Link to={'/exercises'}>Exercícios</Link>
        <Link to={'/Contact'}>Contato</Link>
        <Link to={`/customer/${user}`}>Maromba</Link>
      </Menu>
    </Container>
  )
}