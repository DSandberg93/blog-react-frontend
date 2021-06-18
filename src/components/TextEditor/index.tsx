import React, { useState } from 'react';
import { TextEditorProps as IProps } from './types';
import { TextEditorInput, TextMeasurer, TextEditorContainer } from './styled';

const TextEditor = ({ onChange }: IProps) => {
  const [text, setText] = useState(['']);

  const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    const textList = value.split('\n');
    setText(textList);
    onChange(value);
  };

  return (
    <TextEditorContainer>
      <TextEditorInput onInput={onInput} />
      <TextMeasurer id="text-measurer">{text.map((textRow, index) => <div key={index}>{textRow?.trim().length ? textRow : '.'}</div>)}</TextMeasurer>
    </TextEditorContainer>
  );
};

export default TextEditor;
