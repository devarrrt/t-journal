import React, { FC, useState } from 'react'
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { OutputData } from '@editorjs/editorjs';

import useComments from '../../hooks/useComments'
import data from '../../data'

import Comment from '../Comment'
import AddCommentForm from '../AddComment'

interface PostCommentsProps {
    postId: number;
}

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

const PostComments: FC<PostCommentsProps> = ({ postId }) => {
    const [activeTab, setActiveTab] = useState(0);
    const { setComments } = useComments(postId);
    const comments = data.comments[activeTab === 0 ? 'popular' : 'new']

    const userData = {
        id: 1,
        user: 'Alania Bill',
        text: 'I hope its really)',
        createdAt: '12/12/2022',
        currentUserId: 1
    }

    const onAddComment = (obj: CommentItem) => {
        setComments((prev) => [...prev, obj]);
    };

    const onRemoveComment = (id: number) => {
        setComments((prev) => prev.filter((obj) => obj.id !== id));
    };

    return (
        <Paper elevation={0} className="mt-40 p-30">
            <div className="container">
                <Typography variant="h6" className="mb-20">
                    42 комментария
                </Typography>
                <Tabs
                    onChange={(_, newValue) => setActiveTab(newValue)}
                    className="mt-20"
                    value={activeTab}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                {userData && <AddCommentForm onSuccessAdd={onAddComment} postId={postId} />}
                <div className="mb-20" />
                {comments.map((obj) => (
                    <Comment
                        key={obj.id}
                        id={obj.id}
                        user={obj.user}
                        text={obj.text}
                        createdAt={obj.createdAt}
                        currentUserId={userData?.id}
                        onRemove={onRemoveComment}
                    />
                ))}
            </div>
        </Paper>
    )
}

export default PostComments

//30