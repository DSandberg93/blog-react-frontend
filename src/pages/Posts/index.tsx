import React from 'react';

import Container from 'components/Container';

import { PostsProps as IProps, PostsState as IState } from './types';

class Posts extends React.PureComponent<IProps, IState> {
  render() {
    return (
      <Container padding="full">
        Posts, coming soon...
      </Container>
    );
  }
}

export default Posts;
