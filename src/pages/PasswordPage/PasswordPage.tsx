import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Button } from "../../components/UI/UI/Button/Button";
import { Container } from "../../components/UI/UI/Container/container.style";
import { Input } from "../../components/UI/UI/Input/InputWord";
import { StylePasswordPage } from "./PasswordPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IPasswordForm {
  newPassword: string;
  confirmPassword: string;
}

const passwordSchema = yup.object({
  newPassword: yup
    .string()
    .required("Обязательное поле")
    .min(5, "Пароль должен содержать не менее 5 символов"),
  confirmPassword: yup
    .string()
    .required("Обязательное поле")
    .oneOf([yup.ref('newPassword')], "Пароли не совпадают"),
});

export const PasswordPage = () => {
  const navigate = useNavigate();
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasswordForm>({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onPasswordSubmit: SubmitHandler<IPasswordForm> = (data) => {
    console.log(data); // Вывод данных формы в консоль
    navigate("/login-page");
  };

  return (
    <Container>
      <StylePasswordPage>
        <Heading headingText="Придумайте пароль" />
        <p>
          Введите новый пароль для вашей учетной записи. Пароль должен содержать
          не менее 8 символов, включая заглавные и строчные буквы, цифры и
          специальные символы.
        </p>
        <form onSubmit={handleSubmit(onPasswordSubmit)}>
          <Controller
            name="newPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Новый пароль"
                errorText={errors.newPassword?.message}
                isError={!!errors.newPassword}
                {...field}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Повторите пароль"
                errorText={errors.confirmPassword?.message}
                isError={!!errors.confirmPassword}
                {...field}
              />
            )}
          />
          <Button
            isPrimary
            buttonText="Восстановить пароль"
          />
        </form>  
      </StylePasswordPage>
    </Container>
  );
};
