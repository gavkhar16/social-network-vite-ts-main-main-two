import { useNavigate } from "react-router-dom"; 
import { Heading } from "../../components/UI/Header/Typography/Heading";
import * as yup from "yup";
import { Linktext } from "../../components/UI/Header/Typography/Linktext";
import { Button } from "../../components/UI/UI/Button/Button";
import { Container } from "../../components/UI/UI/Container/container.style";
import { RegistrationInfo } from "../../components/UI/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/UI/Input/InputWord";
import "./LoginPage.scss";
import { StyleLoginPage } from "./LogiPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const loginFormScheme = yup.object({
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Некорректный формат электронной почты"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать не менее 4 символов"),
});

export const LoginPage = () => {
  const navigate = useNavigate(); 

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <StyleLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Электронная почта"
                errorText={errors.userEmail?.message}
                isError={!!errors.userEmail}
                {...field}
              />
            )}
          />
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Введите пароль"
                errorText={errors.userPassword?.message}
                isError={!!errors.userPassword}
                {...field}
              />
            )}
          />
          <Button isPrimary buttonText="Войти" />
        </form>
        <Linktext
          linkText="Забыли пароль?"
          onLinkClick={() => navigate("/wrong-password")} 
        />
        <RegistrationInfo  Infotext="Войти с помощью"/>
      </StyleLoginPage>
    </Container>
  );
};
