import { TPostCreateRequest, TPost } from 'types/post';
import { addPost, getPost } from '_mocks/posts';
import { getPosts } from './_mocks/posts';

export const createPost = (post: TPostCreateRequest) => {
  return new Promise<{success: boolean}>((resolve, reject) => {
    const addPostResult = addPost(post);
    if (addPostResult >= 0) {
      resolve({ success: true });
    } else {
      reject({ success: false });
    }
  });
};

export const fetchPosts = () => {
  return new Promise<TPost[]>((resolve) => {
    resolve(getPosts());
  });
};

export const fetchPost = (url: string) => {
  return new Promise<TPost>((resolve, reject) => {
    const post = getPost(url);
    if (post) {
      resolve(post);
    } else {
      reject('post doesn\'t exist');
    }
  });
};
