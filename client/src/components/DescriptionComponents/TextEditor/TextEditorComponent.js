import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const editorStyle = {
    height: '200px',
    // width: '727px',
  };

  const Style = styled.div`
    margin-bottom: 3rem;
  `;
  return (
    <Style>
      <ReactQuill
        style={editorStyle}
        value={editorHtml}
        onChange={handleChange}
      />
    </Style>
  );
};

export default TextEditor;
