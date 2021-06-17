import React from 'react';
import { TextEditorProps as IProps } from './types';
import { TextEditorInput } from './styled';

const TextEditor = ({ onChange }: IProps) => {
  return (
    <TextEditorInput
      onInput={(e) => {
        onChange(e.currentTarget.value.split('\n').filter((value) => !!value));
      }}
    />
  );
};

export default TextEditor;
