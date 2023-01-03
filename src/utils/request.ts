import Cookies, { parseCookies } from 'nookies';
import axios from 'axios';

import {CommentApi} from '../api/comments'

export type ApiReturnType = {
//   user: ReturnType<typeof UserApi>;
//   post: ReturnType<typeof PostApi>;
  comment: ReturnType<typeof CommentApi>;
};

const Api = (): ApiReturnType => {
  const cookies = parseCookies();
  const token = cookies.rtoken;

    const instance = axios.create({
    baseURL: 'http://localhost:7777',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  const apis = {
    // user: UserApi,
    // post: PostApi,
    comment: CommentApi,
  };

    const result = Object.entries(apis).reduce((prev, [key, f]) => {
    return {
      ...prev,
      //@ts-ignore
      [key]: f(instance),
    };
  }, {} as ApiReturnType);

  return result;


}
export default Api