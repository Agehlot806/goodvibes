import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorComponent = ({ content }) => {
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    setEditorContent(content);
  }, [content]);

//  Disable Editing
 const readOnlyConfig = {
    toolbar: [],
    readOnly: true,
 };
   // Custom styles for CKEditor
   const customStyles = `
   .ck-content {
     padding: 40px;
   }
 `;

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}      
        config={readOnlyConfig} //Hides the toolbar
        data={editorContent}
        styles={customStyles}
      disabled
      />
    </div>
  );
};

export default CKEditorComponent;
