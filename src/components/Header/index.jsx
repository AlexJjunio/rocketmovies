import { Container, Profile, Logout } from "./style";
// import { RiShutDownLine } from "react-icons/ri"

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/AlexJjunio.png" alt="Foto do usuário" />
        <div>
          <strong>Alex Junio Moreira</strong>
          <span>sair</span>
        </div>
      </Profile>

      {/* <Logout>
        <RiShutDownLine/>
      </Logout> */}
    </Container>
  )
}

