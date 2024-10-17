import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Linktext } from "../../components/UI/Header/Typography/Linktext";
import { Container } from "../../components/UI/UI/Container/container.style";
import { Input } from "../../components/UI/UI/Input/InputWord";

export const CodePage = () => {
  return (
    <Container>
      <Heading headingText="Ведите код" />
      <p>
        Пожалуйста, введите код из SMS, который был отправлен на ваш номер
        телефона
      </p>
      <span>1:00</span>
      <form action="#">
        <Input type="tel" />
        <Input type="tel" />
        <Input type="tel" />
        <Input type="tel" />
      </form>
      <p>
        Код не пришел?
        <Linktext text="Отправить повторно" />
      </p>
    </Container>
  );
};
