import React, { useState } from 'react'

import { Paper, Button, IconButton, Avatar, List, ListItem } from '@material-ui/core';
import {
    SearchOutlined as SearchIcon,
    SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowBottom,
    NotificationsNoneOutlined as NotificationIcon,
    AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';

import AuthDialog from '../AuthDialog'

import logoSvg from '../../images/logo.svg'
import styles from './Header.module.scss';

type Props = {}

export type ResponseUser = {
    createdAt: string;
    email: string;
    fullName: string;
    id: number;
    commentsCount?: number;
    token: string;
    updatedAt: string;
};

export type PostItem = {
    title: string;
    // body: OutputData['blocks'];
    description: string;
    tags: null | string;
    id: number;
    views: number;
    user: ResponseUser;
    createdAt: string;
    updatedAt: string;
};

const Header = (props: Props) => {
    const userData = {}
    const [searchValue, setSearchValue] = useState('');
    const [posts, setPosts] = useState<PostItem[]>([]);
    const [authVisible, setAuthVisible] = useState(false);

    const openAuthDialog = () => {
        setAuthVisible(true);
    };

    const closeAuthDialog = () => {
        setAuthVisible(false);
    };
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <Paper classes={{ root: styles.root }} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <a href="/">
                    <img height={35} className="mr-20" src={logoSvg} alt="Logo" />
                </a>

                <div className={styles.searchBlock}>
                    <SearchIcon />
                    <input value={searchValue} onChange={handleChangeInput} placeholder="Search" />

                    {posts.length > 0 && (
                        <Paper className={styles.searchBlockPopup}>
                            <List>
                                {posts.map((obj) => (
                                    <a key={obj.id} href={`/news/${obj.id}`}>
                                        <ListItem button>{obj.title}</ListItem>
                                    </a>
                                ))}
                            </List>
                        </Paper>
                    )}
                </div>

                <a href="/write">
                    <Button variant="contained" className={styles.penButton}>
                        Add a note
                    </Button>
                </a>
            </div>

            <div className="d-flex align-center">
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                {userData ? (
                    <a href="/profile" className="d-flex align-center">
                        <Avatar
                            className={styles.avatar}
                            alt="Remy Sharp"
                            src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                        />
                        <ArrowBottom />
                    </a>
                ) : (
                    <div className={styles.loginButton} onClick={openAuthDialog}>
                        <UserIcon />
                        Войти
                    </div>
                )}
            </div>
            <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
        </Paper>
    )
}

export default Header