import React from 'react';
import { TPost } from 'types/post';
import Link from 'components/Link';
import parsePostContent from 'parsers/parsePostContent';

export default function PostExcerpt({ title, url, content }: TPost) {
  return (
    <Link to={`/${url}`}>
      <h3>{title}</h3>
      <div>{parsePostContent(content)[0]}</div>
    </Link>
  );
}
