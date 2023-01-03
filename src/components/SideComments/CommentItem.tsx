import React, { FC } from 'react'
import { Avatar } from '@material-ui/core';

import styles from './SideComments.module.scss';

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

export type ResponseUser = {
  createdAt: string;
  email: string;
  fullName: string;
  id: number;
  commentsCount?: number;
  token: string;
  updatedAt: string;
};

interface CommentItemProps {
  user: ResponseUser;
  text: string;
  post: PostItem;
}

///fix any
const CommentItem: FC<any> = ({ obj }) => {

  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{obj?.user?.fullName}</Avatar>
        <a href={`/profile/${obj?.user.id}`}>
          <b>{obj?.user.fullName}</b>
        </a>
      </div>
      <p className={styles.text}>{obj?.text}</p>
      <a href={`/news/${obj?.post.id}`}>
        <span className={styles.postTitle}>{obj?.post.title}</span>
      </a>
    </div>
  )
}

export default CommentItem