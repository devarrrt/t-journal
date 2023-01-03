import { AxiosInstance } from 'axios';
import { OutputData } from '@editorjs/editorjs';

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
type CreateCommentDto = {
  postId: number;
  text: string;
};

const CommentApi = (instance: AxiosInstance) => ({
  async getAll(postId: number) {
    const { data } = await instance.get<CommentItem[]>('/comments', { params: { postId } });
    return data;
  },
  async create(dto: CreateCommentDto) {
    const { data } = await instance.post<CreateCommentDto, { data: CommentItem }>('/comments', dto);
    return data;
  },
  async remove(id: number) {
    return instance.delete('/comments/' + id);
  },
})

export { CommentApi };
