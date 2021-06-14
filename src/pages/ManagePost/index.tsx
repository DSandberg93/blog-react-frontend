import React from 'react';
import { withRouter } from 'react-router';

import Container from 'components/Container';

import { ManagePostProps as IProps, ManagePostState as IState } from './types';
import TextEditor from 'components/TextEditor/index';

class PostManager extends React.PureComponent <IProps, IState> {
  render() {
    return (
      <Container padding="full">
        <div>Post Manager</div>
        <TextEditor />
      </Container>
    );
  }
}

export default withRouter(PostManager);
