export interface TextEditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  value: string,
}
