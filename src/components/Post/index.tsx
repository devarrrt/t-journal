import React, { FC } from 'react'
import { Paper, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"
import styles from './Post.module.scss';

import PostActions from '../PostActions'

interface PostProps {
    title: string;
    id: number;
    description: string;
    imageUrl?: string;
}

const Post: FC<PostProps> = ({ id, title, description, imageUrl }) => {

    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>
                <Link to={`/news/${id}`}>
                    {title}
                </Link>
            </Typography>
            <Typography className="mt-10 mb-15">{description}</Typography>
            {imageUrl && (
                <img
                    src={imageUrl}
                    height={400}
                    width={600}
                    alt={title}
                />
            )}
            <PostActions />
        </Paper>
    )
}

export default Post