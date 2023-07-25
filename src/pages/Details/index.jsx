import { Container, Links } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tags"
import { ButtonText } from "../../components/ButtonText"


export function Details() {
  return(
    <Container>
      <Header/>

      <ButtonText title="Excluir nota"/>

      {/* <Section title="Marcadores">
        <Links>
          <li>
            <a href="#">Super-man</a>
          </li>
          <li>
            <a href="#">Super-man</a>
          </li>
        </Links>
      </Section> */}

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="node"/>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}