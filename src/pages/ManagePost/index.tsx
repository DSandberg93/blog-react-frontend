import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Container from 'components/Container';
import TextEditor from 'components/TextEditor/index';
import { createPost } from 'api';

import { ManagePostProps as IProps } from './types';

function PostManager({ history }: IProps) {
  const [postContent, setPostContent] = useState('');
  const [postTitle, setPostTitle] = useState('');

  const onSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postTitle && postContent) {
      onCreatePost(postTitle, postContent);
    }
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.currentTarget.value);
  };

  const onCreatePost = (title: string, content: string) => {
    createPost({ title, content })
      .then(() => history.push('/posts'))
      .catch(() => console.log('failed to create post'));
  };

  return (
    <Container padding="full">
      <div>Post Manager</div>
      <form onSubmit={onSubmitPost}>
        <input type="text" onChange={onChangeTitle} placeholder="Post Title" />
        <TextEditor onChange={(postContent: string) => setPostContent(postContent)} />
        <button role="submit">Save Post</button>
      </form>
    </Container>
  );
}

export default withRouter(PostManager);
