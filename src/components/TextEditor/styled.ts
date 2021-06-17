import styled from 'styled-components';

export const TextEditorInput = styled.textarea`
  width: 100%;
  display: block;
  max-height: 960px;
  line-height: 21px;
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  outline: none;
  resize: none;
  box-sizing: border-box;
  font: inherit;
  overflow-y: auto;

  &:focus {
    border: 1px solid grey;
  }
  
  &[contenteditable]:empty::before {
    content: "Post content";
    color: gray;
  }
`;