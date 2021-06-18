import React, { useState } from 'react';

import Container from 'components/Container';

import { PostsProps as IProps } from './types';
import Link from 'components/Link';
import { TPost } from 'types/post';
import { fetchPosts } from 'api';
import PostExcerpt from './components/PostExcerpt/index';

export default function Posts(props: IProps) {
  const [posts, setPosts] = useState<TPost[]>([]);

  fetchPosts().then((newPosts) => setPosts(newPosts));

  const renderPosts = () => {
    return (
      <div>
        {posts.map((post, index) => <PostExcerpt key={index} {...post} />)}
      </div>
    );
  };

  return (
    <Container padding="full">
      <h2>Posts</h2>
      {renderPosts()}
      <Link to="/posts/create">Create new Post</Link>
    </Container>
  );
}
