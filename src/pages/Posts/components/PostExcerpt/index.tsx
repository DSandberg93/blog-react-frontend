import React from 'react';
import { TPost } from 'types/post';
import Link from 'components/Link';

export default function PostExcerpt({ title, url, content, excerpt }: TPost) {
  return (
    <Link to={`/${url}`}>
      <h3>{title}</h3>
      <div>{excerpt}</div>
    </Link>
  );
}
