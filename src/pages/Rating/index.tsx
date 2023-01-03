import React, { FC, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import FollowButton from '../../components/FollowButton';

interface RatingPageProps {}

const usersData = [
  {
    id: 1,
    fullName: 'Denni',
    commentsCount: 12,
  },
  {
    id: 2,
    fullName: 'Helly',
    commentsCount: 6,
  },
];

const Rating: FC<RatingPageProps> = () => {
  const [users, setUsers] = useState(usersData);

  return (
    <MainLayout>
      <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
        <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}>
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
          рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
        </Typography>
        <Tabs className="mt-10" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Август" />
          <Tab label="За 3 месяцуа" />
          <Tab label="За всё время" />
        </Tabs>
      </Paper>

      <Paper elevation={0}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((obj) => (
              <TableRow key={obj.id}>
                <TableCell component="th" scope="row">
                  <span className="mr-15">{obj.id}</span>
                  {obj.fullName}
                </TableCell>
                <TableCell align="right">{obj.commentsCount * 2}</TableCell>
                <TableCell align="right">
                  <FollowButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};

export default Rating;
