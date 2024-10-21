import { useNavigate } from "react-router-dom"; 
import { Heading } from "../../components/UI/Header/Heading";
import * as yup from "yup";
import { Linktext } from "../../components/UI/Header/Typography/LinkText/Linktext";
import { Button } from "../../components/UI/UI/Button/Button";
import { Container } from "../../components/UI/UI/Container/container.style";
import { RegistrationInfo } from "../../components/UI/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/UI/Input/InputWord";
import { StyleRegistrationPage } from "./RegistrationPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IRegistrationForm {
  userEmail: string;
  userPhone: string;
  userPassword: string;
}

// Схема валидации для формы регистрации
const registrationFormSchema = yup.object({
  userEmail: yup.string().required("Обязательное поле"),
  userPhone: yup
    .string()
    .required("Обязательное поле")
    .matches(/^\+?[0-9]{10,15}$/, "Некорректный номер телефона"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать не менее 4 символов"),
});

export const RegistrationPage = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      userEmail: "",
      userPhone: "",
      userPassword: "",
    },
  });

  const onRegisterSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    // Создаем массив с данными пользователя
    const userData = [data.userEmail, data.userPhone, data.userPassword];

    // Сохраняем массив данных пользователя в localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    console.log("Регистрация завершена:", data);
    navigate("/password-page"); // Перенаправление на другую страницу
  };

  return (
    <Container>
      <StyleRegistrationPage>
        <Heading headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
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
            name="userPhone"
            control={control}
            render={({ field }) => (
              <Input
                type="tel"
                placeholder="Номер телефона"
                errorText={errors.userPhone?.message}
                isError={!!errors.userPhone}
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
                placeholder="Пароль"
                errorText={errors.userPassword?.message}
                isError={!!errors.userPassword}
                {...field}
              />
            )}
          />
          <Button isPrimary buttonText="Зарегистрироваться" />
        </form>
        <Linktext
          regularText="Уже есть аккаунт?"
          linkText="Войти"
          onLinkClick={() => navigate("/")}
        />
        <RegistrationInfo Infotext="Регистрация с помощью:" />
      </StyleRegistrationPage>
    </Container>
  );
};
