import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Container from 'components/Container';
import TextEditor from 'components/TextEditor/index';
import { createPost, fetchPost, updatePost } from 'api';

import { ManagePostProps as IProps } from './types';
import { TPost } from 'types/post';
import { titleToUrl } from 'parsers/urlParser';

function PostManager({ history, match, edit }: IProps) {
  const [currentPost, setPost] = useState<TPost>(null);

  const onSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPostValid()) {
      if (edit) {
        onUpdatePost(currentPost);
      } else {
        if (!currentPost.url) currentPost.url = titleToUrl(currentPost.title);
        onCreatePost(currentPost);
      }
    }
  };

  const isPostValid = () => !!currentPost.title && !!currentPost.content;

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...currentPost, title: e.currentTarget.value });
  };

  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.currentTarget.value.replace(' ', '-');
    e.currentTarget.value = url;
    setPost({ ...currentPost, url });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...currentPost, content: e.currentTarget.value });
  };

  const onChangeExcerpt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...currentPost, excerpt: e.currentTarget.value });
  };

  const onCreatePost = (post: TPost) => {
    createPost(post)
      .then((result) => history.push(`/${result.post.url}`))
      .catch(() => console.log('failed to create post'));
  };

  const onUpdatePost = (post: TPost) => {
    updatePost(post)
      .then(() => history.push(`/${post.url}`))
      .catch((e) => console.log(e));
  };

  if (!currentPost) {
    if (edit) {
      fetchPost(match.params.post)
        .then((result) => {
          setPost(result);
          if (result) {
            const titleInput = (document.getElementById('title-input') as HTMLInputElement);
            const urlInput = (document.getElementById('url-input') as HTMLInputElement);
            const contentInput = (document.getElementById('content-input') as HTMLTextAreaElement);
            const excerptInput = (document.getElementById('excerpt-input') as HTMLTextAreaElement);
            titleInput.value = result.title;
            urlInput.value = result.url;
            contentInput.value = result.content;
            excerptInput.value = result.excerpt;
          }
        })
        .catch(console.log);
    } else {
      setPost({ title: '', content: '', excerpt: '', url: '' });
    } 
  }

  return (
    <Container padding="full">
      <div>Post Manager</div>
      <form onSubmit={onSubmitPost}>
        <input type="text" onChange={onChangeTitle} placeholder="Post Title" id="title-input" />
        <input type="text" onChange={onChangeUrl} placeholder="Post Url" id="url-input" />
        <TextEditor onChange={onChangeExcerpt} id="excerpt-input" value={currentPost?.excerpt} />
        <TextEditor onChange={onChangeContent} id="content-input" value={currentPost?.content} />
        <button role="submit">Save Post</button>
      </form>
    </Container>
  );
}

export default withRouter(PostManager);
