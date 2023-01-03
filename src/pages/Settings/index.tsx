import React, { FC } from 'react'
import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';

import MainLayout from '../../layouts/MainLayout'

interface SettingsProps { }

const Settings: FC<SettingsProps> = () => {
    const navigate = useNavigate();

    const goBack = (prev: number) => {
        navigate(prev)
    }

    return (
        <MainLayout hideComments>
            <Paper className="p-20" elevation={0}>
                <div className="d-flex">
                    <Button onClick={() => goBack(-1)}>
                        <ArrowBack />
                    </Button>
                    <Typography variant="h6">Основные настройки</Typography>
                </div>
                <Divider className="mt-20 mb-30" />
                <form>
                    <TextField
                        className="mb-20"
                        size="small"
                        label="Никнейм"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        className="mb-20"
                        size="small"
                        label="Эл. почта"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField size="small" label="Пароль" variant="outlined" fullWidth required />
                    <Divider className="mt-30 mb-20" />
                    <Button color="primary" variant="contained">
                        Сохранить изменения
                    </Button>
                </form>
            </Paper>
        </MainLayout>
    )
}

export default Settings