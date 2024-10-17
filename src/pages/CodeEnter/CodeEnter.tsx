import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Linktext } from "../../components/UI/Header/Typography/Linktext";
import { Container } from "../../components/UI/UI/Container/container.style";
import { Input } from "../../components/UI/UI/Input/InputWord";
import { StyleCodeEnter } from "./CodeEnter.style";
import { useState, useEffect } from "react";

export const CodeEnter = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  const formattedTime = `0:${timer < 10 ? `0${timer}` : timer}`;

  return (
    <Container>
      <StyleCodeEnter>
        <Heading headingText="Введите код" />
        <p>Пожалуйста, введите код из SMS, который был отправлен на ваш номер телефона</p>
        <div className="timer">{formattedTime}</div>
        <form>
          <Input type="tel" maxLength={1} />
          <Input type="tel" maxLength={1} />
          <Input type="tel" maxLength={1} />
          <Input type="tel" maxLength={1} />
        </form>
        <p>
          Код не пришел? <Linktext text="Отправить повторно" />
        </p>
      </StyleCodeEnter>
    </Container>
  );
};
