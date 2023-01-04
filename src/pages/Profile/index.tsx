import React, { FC } from 'react'
import { Link } from "react-router-dom";
import { Paper, Avatar, Typography, Button, Tabs, Tab } from '@material-ui/core';
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from '@material-ui/icons';

import MainLayout from '../../layouts/MainLayout';
import Post from '../../components/Post';

const postData =
{
  id: 1,
  title: 'Его лучший фильм за долгие годы»: хоррор с Николасом Кейджем получил 100% положительных рецензий на Rotten Tomatoes',
  description: 'Актёр-мем, которого обвиняли в плохой игре и неразборчивости в фильмах, смог удивить критиков на фестивале «Сандэнс» 22 января на ежегодном американском фестивале независимого кино «Сандэнс» впервые показали «Мэнди»: хоррор про человека, который потерял жену и начал охоту за религиозным культом, чтобы отомстить за неё. Главную роль в нём сыграл Николас Кейдж, пик карьеры которого пришёлся на получение «Оскара» за лучшую мужскую роль в 1996 году',
  imageUrl: 'https://leonardo.osnova.io/5cff215f-de3d-b44c-a0b5-c0052dfdbf91/-/preview/1200/'
}

interface ProfileProps { }

const Profile: FC<ProfileProps> = () => {
  return (
    <MainLayout contentFullWidth hideComments>
      <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
        <div className="d-flex justify-between">
          <div>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <Typography style={{ fontWeight: 'bold' }} className="mt-10" variant="h4">
              Helly Hansen
            </Typography>
          </div>

          <div>
            <Link to="/profile/settings">
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained">
                <SettingsIcon />
              </Button>
            </Link>
            <Button style={{ height: 42 }} variant="contained" color="primary">
              <MessageIcon className="mr-10" />
              Написать
            </Button>
          </div>
        </div>

        <div className="d-flex mb-10 mt-10">
          <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className="mr-15">
            +208
          </Typography>
          <Typography>2 подписчика</Typography>
        </div>
        <Typography>На проекте с 15 сен 2020</Typography>

        <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Статьи" />
          <Tab label="Комментарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>
      <div className="d-flex align-start">
        <div className="mr-20 flex">
          <Post {...postData} />
        </div>
        <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
          <b>Подписчики</b>
          <div className="d-flex mt-15">
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
          </div>
        </Paper>
      </div>
    </MainLayout>
  )
}

export default Profile