export interface ButtonProps {
  onClick: () => void,
  children: string | JSX.Element | JSX.Element[],
  role: 'button' | 'submit' | 'reset',
}