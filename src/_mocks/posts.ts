import { TPostCreateRequest, TPost } from 'types/post';

const posts: TPost[] = [
  {
    content: 'content',
    title: 'first',
    url: 'first',
  },
];

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

export const updateMockPost = (post: TPost) => {
  const index = posts.findIndex((existingPost) => post.title === existingPost.title);
  if (index >= 0) {
    posts[index] = post;
    return post;
  }
  return false;
};

const titleToUrl = (title: string) => title.toLowerCase().replace(' ', '-');
