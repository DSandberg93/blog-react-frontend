import React, { useState } from 'react';
import { TextEditorProps as IProps } from './types';
import { TextEditorInput } from './styled';

const TextEditor = ({ onChange }: IProps) => {
  const [text, setText] = useState(['']);

  const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setText(value.split('\n'));
    onChange(value);
  };

  return (
    <TextEditorInput onInput={onInput} rows={text.length} />
  );
};

export default TextEditor;
