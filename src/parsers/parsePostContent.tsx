import React from 'react';

export default function parsePostContent(postContent: string) {
  return postContent.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>);
}
