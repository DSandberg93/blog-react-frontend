import { TPost } from 'types/post';
import { addPost, getPost } from '_mocks/posts';
import { getPosts, updateMockPost } from './_mocks/posts';

export const createPost = (post: TPost) => {
  return new Promise<{post: TPost}>((resolve, reject) => {
    const result = addPost(post);
    if (result) {
      resolve({ post: result });
    } else {
      reject('unable to create post');
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

export const updatePost = (post: TPost) => {
  return new Promise<TPost>((resolve, reject) => {
    const updatedPost = updateMockPost(post);
    if (updatedPost) {
      resolve(updatedPost);
    } else {
      reject();
    }
  });
};
