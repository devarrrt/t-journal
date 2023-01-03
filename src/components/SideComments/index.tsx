import React, { FC, useState } from 'react'
import clsx from 'clsx';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import CommentItem from './CommentItem'

import styles from './SideComments.module.scss';

interface SideCommentsProps { }

const comments = [
    {
        id: 1,
        user: {
            id: 1,
            fullname: 'Вася Пупкин',
            avatarUrl:
                'https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            id: 1,
            title: 'Какая у вас дома ванна?',
        },
        createdAt: new Date().toString(),
    },
    {
        id: 2,
        user: {
            id: 1,
            fullname: 'Вася Пупкин',
            avatarUrl:
                'https://leonardo.osnova.io/f2b74c5b-6387-15f0-e6d7-1d2eacc52c09/-/scale_crop/64x64/-/format/webp/',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            id: 1,
            title: 'Какая у вас дома ванна?',
        },
        createdAt: new Date().toString(),
    },
    {
        id: 3,
        user: {
            id: 1,
            fullname: 'Вася Пупкин',
            avatarUrl:
                'https://leonardo.osnova.io/7161cd97-ffdc-1930-2b13-419de941c777/-/scale_crop/64x64/-/format/webp/',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            id: 1,
            title: 'Какая у вас дома ванна?',
        },
        createdAt: new Date().toString(),
    },
]

const SideComments = () => {
    const [visible, setVisible] = useState(true);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <div className={clsx(styles.root, !visible && styles.rotated)}>
            <h3 onClick={toggleVisible}>
                Комментарии <ArrowRightIcon />
            </h3>
            {visible && comments.map((obj) => <CommentItem key={obj.id} obj={obj}/>)}
        </div>
    )
}

export default SideComments