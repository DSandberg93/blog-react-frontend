import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Container from 'components/Container';
import TextEditor from 'components/TextEditor/index';
import { createPost, fetchPost } from 'api';

import { ManagePostProps as IProps } from './types';

function PostManager({ history, match, edit }: IProps) {
  const [currentPost, setPost] = useState<{ title: string, content: string }>(null);

  const onSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPostValid()) {
      onCreatePost(currentPost);
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
      .then(() => history.push(`/${post.title}`))
      .catch(() => console.log('failed to create post'));
  };

  if (!currentPost) {
    if (edit) {
      fetchPost(match.params.post)
        .then((result) => {
          setPost(result);
          if (result) {
            const titleInput = (document.getElementById('title-input') as HTMLInputElement);
            const contentInput = (document.getElementById('content-input') as HTMLTextAreaElement);
            titleInput.value = result.title;
            contentInput.value = result.content;
          }
        })
        .catch(console.log);
    } else {
      setPost({ title: '', content: '' });
    } 
  }

  return (
    <Container padding="full">
      <div>Post Manager</div>
      <form onSubmit={onSubmitPost}>
        <input type="text" onChange={onChangeTitle} placeholder="Post Title" id="title-input" />
        <TextEditor onChange={onChangeContent} id="content-input" value={currentPost?.content} />
        <button role="submit">Save Post</button>
      </form>
    </Container>
  );
}

export default withRouter(PostManager);
