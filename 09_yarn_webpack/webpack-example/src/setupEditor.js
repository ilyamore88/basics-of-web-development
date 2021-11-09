import EditorJS from "@editorjs/editorjs";

const rootElement = document.getElementById('root');

const editorContainer = document.createElement('div');
editorContainer.setAttribute('id', 'editorjs');
rootElement.appendChild(editorContainer);

const editor = new EditorJS({
    holder: 'editorjs',
})