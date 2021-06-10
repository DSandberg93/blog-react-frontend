export interface ContainerProps extends StyledContainerProps {
  children: React.ReactChild | React.ReactChild[],
}

export interface StyledContainerProps {
  flexDirection?: 'column' | 'row',
  padding?: 'vertical' | 'horizontal' | 'full' | 'top' | 'bottom',
}
