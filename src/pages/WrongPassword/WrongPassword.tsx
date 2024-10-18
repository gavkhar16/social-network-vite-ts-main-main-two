import { Container } from "../../components/UI/UI/Container/container.style"
import { Heading } from "../../components/UI/Header/Typography/Heading"
import { Input } from "../../components/UI/UI/Input/InputWord"
import { Button } from "../../components/UI/UI/Button/Button"


export const WrongPassword =() => {
  return(
    <Container>
      <Heading headingText="Забыли пароль?"/>
      <p>Укажите свой номер телефона, чтобы получить код для сброса пароля.</p>
      <form action="#">
      <Input type="tel" placeholder="Номер телефона"/>
      <Button isPrimary buttonText="Отправить"/>
      </form>
    </Container>
  )
}