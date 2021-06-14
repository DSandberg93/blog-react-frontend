import React from 'react';

import Container from 'components/Container';

import { PostsProps as IProps, PostsState as IState } from './types';
import Link from 'components/Link';

class Posts extends React.PureComponent<IProps, IState> {
  render() {
    return (
      <Container padding="full">
        Posts, coming soon...
        <Link to="/posts/create">Create new Post</Link>
      </Container>
    );
  }
}

export default Posts;
