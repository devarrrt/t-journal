import React, { useEffect } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';

const Editor = ({ onChange, initialBlocks }) => {

  let editor = { isReady: false };

  useEffect(() => {
    if (!editor.isReady) {
      editor = new EditorJS({
        holder: 'editor',
        data: {
          blocks: initialBlocks
        },
        placeholder: 'Введите текст вашей статьи',
        async onChange() {
          const { blocks } = await editor.save();
          onChange(blocks);
        },

      });
    }
  }, []);


  return <div id="editor" />
};

export default Editor
