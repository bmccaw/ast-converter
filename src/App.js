import './App.css';
import { useState } from 'react'
import { EditorState} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import exporter from 'draft-js-ast-exporter'


const App = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  const ast = exporter(editorState)
  
  return (
    <div className="App">
      <div className="column">
      <header className="App-header">
        Rich Text
      </header>
        <Editor editorState={editorState}
                onEditorStateChange={setEditorState}
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"/>
      </div>
      <div className="column">
      <header className="App-header">
        AST Output
      </header>
      <pre className="code-block">
        {JSON.stringify(
          ast,
          null,
          2
        )}
      </pre>
      </div>
    </div>
  );
}

export default App;
