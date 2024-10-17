import "./WrongPassword.scss";
import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Button } from "../../components/UI/UI/Button/Button";
import { Container } from "../../components/UI/UI/Container/container.style";
import { Input } from "../../components/UI/UI/Input/InputWord";

export const WrongPassword = () => {
  return (
    <Container>
      <div className="password">
        <div className="WrongPassword">
          <div className="heading">
            <Heading headingText="Забыли пароль?" />
            <p>
              Укажите свой номер телефона, чтобы получить код для сброса пароля.
            </p>
          </div>
          <form action="#">
            <Input type="text" placeholder="Номер телефона" required />
            <Button buttonText="Отправить" />
          </form>
        </div>
        {/* <div className="enterCod">
        <div className="cod">
          <Heading headingText="Введите код" />
          <p>Пожалуйста, введите код из SMS, который был отправлен на ваш номер телефона</p>
          <h2>1:00</h2>
        </div>
        <div className="number">
          <div className="sms">
            <div className="coding">1</div>
            <div className="coding">2</div>
            <div className="coding">3</div>
            <div className="coding">4</div>
          </div>
          <div className="sendMessage">
            <span>Код не пришел?</span>
            <a href="#">Отправить повторно</a>
          </div>
        </div> в процессе
      </div> */}
      </div>
    </Container>
  );
};
