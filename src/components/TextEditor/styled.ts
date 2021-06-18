import styled from 'styled-components';

export const TextEditorContainer = styled.div`
  display: block;
  position: relative;
  max-height: 960px;
  min-height: 39px;
`;

export const TextEditorInput = styled.textarea`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  display: block;
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  outline: none;
  resize: none;
  box-sizing: border-box;
  font: inherit;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }

  &:focus {
    border: 1px solid grey;
  }
  
  &[contenteditable]:empty::before {
    content: "Post content";
    color: gray;
  }
`;

export const TextMeasurer = styled.div`
  height: auto;
  visibility: hidden;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  /* line-height: 21px; */
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  
  div {
    display: block;
    width: auto;
  }
`;
