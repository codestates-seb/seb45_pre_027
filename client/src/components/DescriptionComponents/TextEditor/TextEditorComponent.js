import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const editorStyle = {
    height: '200px',
    // width: '727px',
  };

  return (
    <div>
      <ReactQuill
        style={editorStyle}
        value={editorHtml}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextEditor;
