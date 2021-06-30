import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Container from 'components/Container';
import { fetchPost } from 'api';
import { TPost } from 'types/post';
import parsePostContent from 'parsers/parsePostContent';
import TheVoid from 'pages/TheVoid';

import { PostProps as IProps } from './types';
import Button from 'components/Button/index';

function Post({ match }: IProps) {
  const [post, setPost] = useState<TPost>(null);
  const [currentSite, setCurrentSite] = useState<'read' | 'edit'>('read');

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
      {post?.title && currentSite !== 'edit' &&
        <Button onClick={() => setCurrentSite('edit')} role="button">{`Edit ${post.title}`}</Button>
      }
    </Container>
  );
}

export default withRouter(Post);
