import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Container } from "../../components/UI/UI/Container/container.style";
import { Input } from "../../components/UI/UI/Input/InputWord";
import { StyleRegistrationPage } from "./RegistrationPage.style";
import { Button } from "../../components/UI/UI/Button/Button";
import { Linktext } from "../../components/UI/Header/Typography/Linktext";
import { RegistrationInfo } from "../../components/UI/UI/RegistrationInfo/RegistrationInfo";

export const RegistrationPage = () => {
  return (
    <Container>
      <StyleRegistrationPage>
        <Heading headingText="Регистрация" />
        <form action="#">
          <Input type="text" placeholder="Имя и Фамилия" />
          <Input type="tel" placeholder="Номер телефона" />
          <Input type="password" placeholder="Пароль" />
          <Button buttonText="Зарегистрироватся" isPrimary />
        </form>
        <Linktext
          regularText="Уже есть аккаунт?"
          linkText="Войти"
        />
        <RegistrationInfo Infotext="Регистрация с помощью"/>
      </StyleRegistrationPage>
    </Container>
  );
};
