import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Linktext } from "../../components/UI/Header/Typography/Linktext";
import { Button } from "../../components/UI/UI/Button/Button";
import { Container } from "../../components/UI/UI/Button/Container/container.style";
import { RegistrationInfo } from "../../components/UI/UI/Button/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/UI/Input/InputWord";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <Container>
      <div className="LoginPage">
      <Heading headingText="Авторизация"/>
      <form action="#">
        <Input type="tel" placeholder="Номер телефона" />
        <input type="password" placeholder="Пароль" />
        <Button isPrimary buttonText="Войти"/>
      </form>
      <Linktext text="Забыли пароль"/>
      <RegistrationInfo/>
      
    </div>
    </Container>
  );
};
