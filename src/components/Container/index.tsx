import React from 'react';
import { StyledContainer } from './styled';
import { ContainerProps as IProps } from './types';

const Container = ({ children, flexDirection, padding }: IProps) => {
  return (
    <StyledContainer
      flexDirection={flexDirection || 'column'}
      padding={padding}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
