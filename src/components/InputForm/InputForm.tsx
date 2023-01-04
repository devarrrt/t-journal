import React, { FC } from 'react'
import { TextField } from '@material-ui/core';
import { useFormContext } from 'react-hook-form'

interface FormFieldProps {
    name: string;
    label: string;
}

const InputForm: FC<FormFieldProps> = ({ name, label }) => {
    const { register, formState } = useFormContext();

    return (
        <TextField
            {...register(name)}
            name={name}
            className="mb-20"
            size="small"
            label={label}
            variant="outlined"
            error={!!formState.errors[name]?.message}
            //@ts-ignore
            helperText={formState?.errors && formState?.errors[name]?.message}
             fullWidth
        />
    )
}

export default InputForm