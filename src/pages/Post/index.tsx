import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { fetchPost } from 'api';
import Container from 'components/Container';
import Link from 'components/Link';
import { TPost } from 'types/post';
import parsePostContent from 'parsers/parsePostContent';
import TheVoid from 'pages/TheVoid';

import { PostProps as IProps } from './types';

function Post({ match }: IProps) {
  const [post, setPost] = useState<TPost>(null);

  if (!post) {
    fetchPost(match.params.post)
      .then(setPost)
      .catch(console.log);
    return <TheVoid />;
  }

  return (
    <Container padding="full">
      <h2>{post?.title}</h2>
      <div>{parsePostContent(post?.content)}</div>
      {post?.title &&
        <Link to={`/posts/${match.params.post}/edit`}>Edit {match.params.post}</Link>
      }
    </Container>
  );
}

export default withRouter(Post);
