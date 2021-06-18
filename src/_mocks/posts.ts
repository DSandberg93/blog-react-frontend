import { TPostCreateRequest, TPost } from 'types/post';

const posts: TPost[] = [];

export const getPosts = () => posts;

export const getPost = (url: string) => posts.find((existingPost) => existingPost.url === url);

export const addPost = (post: TPostCreateRequest) => {
  if (posts.findIndex((existingPost) => post.title === existingPost.title) >= 0) {
    return -1;
  }
  return posts.unshift({ ...post, url: titleToUrl(post.title) });
};

export const deletePost = (title: string) => {
  const index = posts.findIndex((existingPost) => existingPost.title === title);
  if (index >= 0) {
    return true;
  }
  return false;
};

export const updatePost = (post: TPost) => {
  const index = posts.findIndex((existingPost) => post.title === existingPost.title);
  if (index >= 0) {
    posts[index] = post;
    return true;
  }
  return false;
};

const titleToUrl = (title: string) => title.toLowerCase().replace(' ', '-');
