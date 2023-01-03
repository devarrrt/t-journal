import { useState, useEffect } from 'react'
import { OutputData } from '@editorjs/editorjs';

import Api from '../utils/request'

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


type UseCommentsProps = {
  setComments: React.Dispatch<React.SetStateAction<CommentItem[]>>;
  comments: CommentItem[];
};

const useComments = (postId?: number): UseCommentsProps => {
  const [comments, setComments] = useState<CommentItem[]>([]);

  const getAll = async (postId: number) => {
    try {
      const arr = await Api().comment.getAll(postId);
      setComments(arr);
    } catch (err) {
      console.warn('Fetch comments', err);
    }
  }

  useEffect(() => {
    if (postId) {
      getAll(postId)
    }
  }, [postId])

  return { comments, setComments };
}

export default useComments