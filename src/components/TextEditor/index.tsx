import React, { useState } from 'react';
import { TextEditorProps as IProps } from './types';
import { TextEditorInput, TextMeasurer, TextEditorContainer } from './styled';

const TextEditor = ({ onChange, value }: IProps) => {
  const [text, setText] = useState(['']);

  const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textList = e.currentTarget.value.split('\n');
    setText(textList);
    onChange(e);
  };

  return (
    <TextEditorContainer>
      <TextEditorInput onInput={onInput} value={value} />
      <TextMeasurer id="text-measurer">{text.map((textRow, index) => <div key={index}>{textRow?.trim().length ? textRow : '.'}</div>)}</TextMeasurer>
    </TextEditorContainer>
  );
};

export default TextEditor;
