// Memento

interface EditorState {
  text: string;
  cursorRow: number;
  cursorCol: number;
  selectionWidth: number;
}

class Editor {
  state: EditorState;
  
  setState(newState: EditorState){
    this.createSnapshot();
    this.state = newState;  
  }

  createSnapshot(): EditorSnapshot {
    return new EditorSnapshot(this, this.state);
  }
  
}

class EditorSnapshot {
  private editor: Editor;
  private state: EditorState;

  constructor(editor: Editor, startState: EditorState){
    this.editor = editor;
    this.state = startState;
  }

  restore(): void{
    this.editor.setState(this.state);
  }
}

class Command {
  editor: Editor;
  backup: EditorSnapshot;

  constructor(editor: Editor){
    this.editor = editor;
  }

  makeBackup(){
    this.backup = this.editor.createSnapshot();
  }

  undo(){
    if(this.backup !== null){
      this.backup.restore();
    }
  }
}

