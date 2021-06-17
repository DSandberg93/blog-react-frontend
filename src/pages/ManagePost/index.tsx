import React, { useState } from 'react';
import { withRouter } from 'react-router';

import Container from 'components/Container';

import { ManagePostProps as IProps } from './types';
import TextEditor from 'components/TextEditor/index';

function PostManager({ history }: IProps) {
  const [postContent, setPostContent] = useState('');
  const [postTitle, setPostTitle] = useState('');

  const onSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(postTitle, postContent);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.currentTarget.value);
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
