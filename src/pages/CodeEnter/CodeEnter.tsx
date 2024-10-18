import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Linktext } from "../../components/UI/Header/Typography/Linktext";
import { Container } from "../../components/UI/UI/Container/container.style";
import { Input } from "../../components/UI/UI/Input/InputWord";
import { StyleCodeEnter } from "./CodeEnter.style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CodeEnter = () => {
  const [timer, setTimer] = useState(60);
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => setTimer((prevTimer) => prevTimer - 1), 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  const formattedTime = `0:${timer < 10 ? `0${timer}` : timer}`;

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

   
    if (newInputValues.every((val) => val.trim() !== "")) {
      navigate("/main-page"); 
    }
  };

  return (
    <Container>
      <StyleCodeEnter>
        <Heading headingText="Введите код" />
        <p>Пожалуйста, введите код из SMS, который был отправлен на ваш номер телефона</p>
        <div className="timer">{formattedTime}</div>
        <form>
          {inputValues.map((value, index) => (
            <Input
              key={index}
              type="tel"
              maxLength={1}
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </form>
        <p>
          Код не пришел? <Linktext text="Отправить повторно" />
        </p>
      </StyleCodeEnter>
    </Container>
  );
};
