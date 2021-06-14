import React from 'react';
import { TextEditorProps as IProps } from './types';
import { TextEditorInput } from './styled';

const TextEditor = (props: IProps) => {
  return (
    <TextEditorInput
      onInput={(e) => {
        console.log(e.currentTarget.value.split('\n'));
      }}
    />
  );
};

export default TextEditor;
