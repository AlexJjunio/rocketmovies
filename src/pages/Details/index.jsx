import { Container } from "./styles"
import { Button } from "../../components/Button"

export function Details() {
  return(
    <Container>
      <h1>APP React</h1>
      <p>Hello World!</p>
      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}