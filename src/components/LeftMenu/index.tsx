import React, { FC } from 'react'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import {
    WhatshotOutlined as FireIcon,
    SmsOutlined as MessageIcon,
    TrendingUpOutlined as TrendingIcon,
    FormatListBulletedOutlined as ListIcon,
} from '@material-ui/icons';

import styles from './LeftMenu.module.scss';
interface LeftMenuProps { }

const menu = [
    { text: 'Лента', icon: <FireIcon />, path: '/' },
    { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
    { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/rating' },
    { text: 'Подписки', icon: <ListIcon />, path: '/follows' },
];

const LeftMenu: FC<LeftMenuProps> = () => {
    return (
        <div className={styles.menu}>
            <ul>
                {menu.map((obj) => (
                    <li key={obj.path}>
                        <Link to={obj.path}>
                            <Button
                            // variant={router.asPath === obj.path ? 'contained' : 'text'}
                            >
                                    {obj.icon}
                                    {obj.text}
                                </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LeftMenu