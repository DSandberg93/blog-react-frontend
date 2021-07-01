import { RouteComponentProps } from 'react-router-dom';
import { TPost } from 'types/post';

export interface ManagePostProps extends RouteComponentProps<{ post?: string, action?: string }> {
  post?: TPost,
}
