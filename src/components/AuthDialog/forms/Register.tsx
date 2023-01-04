import React, { FC } from 'react'
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Alert from '@material-ui/lab/Alert';

import { RegisterFormSchema } from '../../../utils/validations';

import InputForm from '../../InputForm/InputForm';

interface LoginFormProps {
    onOpenRegister: () => void;
    onOpenLogin: () => void;
}

const RegisterForm: FC<LoginFormProps> = ({ onOpenRegister, onOpenLogin }) => {
    const [errorMessage, setErrorMessage] = React.useState('');
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema),
    });

    const onSubmit = async () => {

    };

    return (
        <FormProvider {...form}>
            <InputForm name="fullName" label="Имя и фамилия" />
            <InputForm name="email" label="Почта" />
            <InputForm name="password" label="Пароль" />
            {errorMessage && (
                <Alert severity="error" className="mb-20">
                    {errorMessage}
                </Alert>
            )}
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="d-flex align-center justify-between">
                    <Button
                        disabled={!form.formState.isValid || form.formState.isSubmitting}
                        onClick={onOpenRegister}
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                        Зарегистрироваться
                    </Button>
                    <Button onClick={onOpenLogin} color="primary" variant="text">
                        Войти
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default RegisterForm