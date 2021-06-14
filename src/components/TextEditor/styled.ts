import styled from 'styled-components';

export const TextEditorInput = styled.textarea`
  width: 100%;
  height: 960px;
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font: inherit;
  grid-area: 1 / 1 / 2 / 2;
  resize: none;
  overflow-y: auto;

  &:focus {
    border: 1px solid grey;
  }

  p:last-of-type {
    margin: 0;
  }
`;