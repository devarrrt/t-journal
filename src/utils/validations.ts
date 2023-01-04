import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Проверьте правильность введенных данных').required('Небходимо ввести почту'),
  password: yup.string().min(6, 'Минимальная длина пароля - 6 символов').required('Необходио ввести пароль'),
});

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().required('Необходимо ввести имя и фамилию'),
  })
  .concat(LoginFormSchema);
