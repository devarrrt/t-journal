import React, { FC, useState } from 'react'
import { Input, Button } from '@material-ui/core';
import { OutputData } from '@editorjs/editorjs';

import Api from '../../utils/request'

import styles from './AddComment.module.scss';

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
    body: OutputData['blocks'];
    description: string;
    tags: null | string;
    id: number;
    views: number;
    user: ResponseUser;
    createdAt: string;
    updatedAt: string;
};

export type CommentItem = {
    id: number;
    text: string;
    post: PostItem;
    user: ResponseUser;
    createdAt: string;
    updatedAt: string;
};

interface PostCommentsProps {
    postId: number;
    onSuccessAdd: (obj: CommentItem) => void;
}

const PostComments: FC<PostCommentsProps> = ({ postId, onSuccessAdd }) => {
    const [clicked, setClicked] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [text, setText] = useState('');

    const onAddComment = async () => {
        try {
            setLoading(true);
            const comment = await Api().comment.create({
                postId,
                text,
            });
            onSuccessAdd(comment);
            setClicked(false);
            setText('');
        } catch (err) {
            console.warn('Add comment', err);
            alert('Ошибка при отправке комментария');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.form}>
            <Input
                disabled={isLoading}
                onChange={(e) => setText(e.target.value)}
                value={text}
                onFocus={() => setClicked(true)}
                minRows={clicked ? 5 : 1}
                classes={{ root: styles.fieldRoot }}
                placeholder="Написать комментарий..."
                fullWidth
                multiline
            />
            {clicked && (
                <Button
                    disabled={isLoading || !text}
                    onClick={onAddComment}
                    className={styles.addButton }
                    variant="contained"
                    color="primary"
                >
                    Опубликовать
                </Button>
            )}
        </div>
    )
}

export default PostComments