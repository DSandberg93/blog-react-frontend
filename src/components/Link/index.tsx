import React from 'react';
import { LinkProps } from 'react-router-dom';
import { StyledLink } from './styled';

const Link = (props: LinkProps) => {
  return (
    <StyledLink {...props}>{props.children}</StyledLink>
  );
};

export default Link;
