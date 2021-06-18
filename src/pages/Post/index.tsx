import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Container from 'components/Container';
import { fetchPost } from 'api';
import { TPost } from 'types/post';
import parsePostContent from 'parsers/parsePostContent';
import TheVoid from 'pages/TheVoid';

import { PostProps as IProps } from './types';

function Post({ match }: IProps) {
  const [post, setPost] = useState<TPost>(null);

  fetchPost(match.params.post)
    .then(setPost)
    .catch(console.log);
  
  if (!post) {
    return <TheVoid />;
  }
  return (
    <Container padding="full">
      <h2>{post?.title}</h2>
      <div>{parsePostContent(post?.content)}</div>
    </Container>
  );
}

export default withRouter(Post);
