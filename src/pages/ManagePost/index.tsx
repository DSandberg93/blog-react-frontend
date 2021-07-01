import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Container from 'components/Container';
import TextEditor from 'components/TextEditor/index';
import { createPost, fetchPost, updatePost } from 'api';

import { ManagePostProps as IProps } from './types';
import { TPost } from 'types/post';

function PostManager({ history, match, post }: IProps) {
  const [currentPost, setPost] = useState<{ title: string, content: string }>(null);

  const onSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPostValid()) {
      if (match.params.action === 'edit') {
        onUpdatePost({ ...post, title: currentPost.title, content: currentPost.content });
      } else {
        onCreatePost(currentPost);
      }
    }
  };

  const isPostValid = () => !!currentPost.title && !!currentPost.content;

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...currentPost, title: e.currentTarget.value });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...currentPost, content: e.currentTarget.value });
  };

  const onCreatePost = (post: { title: string, content: string }) => {
    createPost(post)
      .then(() => history.push('/posts'))
      .catch(() => console.log('failed to create post'));
  };

  const onUpdatePost = (updatedPost: TPost) => {
    updatePost(updatedPost)
      .then((responsePost) => history.push(`/posts/${responsePost.url}`));
  };

  if (match.params.post && match.params.action === 'edit' && !currentPost) {
    if (post) {
      setPost({ title: post.title, content: post.content });
    } else {
      fetchPost(match.params.post)
        .then((fetchedPost) => setPost({ title: fetchedPost.title, content: fetchedPost.content }))
        .catch(() => console.log('failed'));
    }
  } else if (!currentPost) {
    setPost({ title: '', content: '' });
  }

  return (
    <Container padding="full">
      <div>Post Manager</div>
      <form onSubmit={onSubmitPost}>
        <input type="text" onChange={onChangeTitle} placeholder="Post Title" value={currentPost?.title} />
        <TextEditor onChange={onChangeContent} value={currentPost?.content} />
        <button role="submit">Save Post</button>
      </form>
    </Container>
  );
}

export default withRouter(PostManager);
