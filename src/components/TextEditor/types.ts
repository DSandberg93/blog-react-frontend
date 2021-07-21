export interface TextEditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  id: string,
  value: string,
  size?: 'large' | 'small',
}
