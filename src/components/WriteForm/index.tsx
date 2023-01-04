import React, { useState } from 'react';
import { OutputData } from '@editorjs/editorjs';

import Editor from '../Editor'

import { Button, Input } from '@material-ui/core';

import styles from './WriteForm.module.scss';

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


interface WriteFormProps {
    // data?: PostItem;
    data: any
}
const WriteForm: React.FC<WriteFormProps> = ({ data }) => {

    const [isLoading, setLoading] = React.useState(false);
    const [title, setTitle] = useState(data?.title || '');
    const [blocks, setBlocks] = useState(data?.body || []);

    const onAddPost = async () => {

    };


    return (
        <div>
            <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                classes={{ root: styles.titleField }}
                placeholder="Заголовок"
            />
            <div className={styles.editor}>
                <Editor
                initialBlocks={data?.body}
                onChange={(arr: any) => setBlocks(arr)}
                />
            </div>
            <Button disabled={isLoading || !blocks.length || !title} onClick={onAddPost} variant="contained" color="primary">
                {data ? 'Сохранить' : 'Опубликовать'}
            </Button>
        </div>
    );
};

export default WriteForm