import React from 'react';
import { ButtonProps as IProps } from './types';
import { StyledButton } from './styled';

export default function Button({ children, ...rest }: IProps) {
  return (
    <StyledButton {...rest}><span>{children}</span></StyledButton>
  );
}
