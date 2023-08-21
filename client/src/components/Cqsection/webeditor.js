import React from 'react';
import { CKEditor } from 'ckeditor4-react';

function TextEditor({ value = '', onChange }) {
  const handleEditorChange = (event) => {
    const editorData = event.editor.getData();
    onChange(editorData);
  };

  const editorConfig = {
    toolbar: 'bold',
  };

  return (
    <div>
      <CKEditor
        data={value}
        onChange={handleEditorChange}
        config={editorConfig}
      />
    </div>
  );
}

export default TextEditor;
