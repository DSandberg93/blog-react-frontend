import styled, { css } from 'styled-components';
import { StyledContainerProps } from './types';

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  ${(props) => props.padding && css`
    ${props.padding === 'full' && css`
      padding: 16px;
    `}

    ${props.padding === 'horizontal' && css`
      padding-left: 16px;
      padding-right: 16px;
    `}

    ${props.padding === 'vertical' && css`
      padding-top: 16px;
      padding-bottom: 16px;
    `}

    ${props.padding === 'top' && css`
      padding-top: 16px;
    `}

    ${ props.padding === 'bottom' && css`
      padding-bottom: 16px;
    `}
  `}
`;
