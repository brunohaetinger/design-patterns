abstract class Command {
  protected app: Application;
  protected editor: Editor;
  protected backup: string;

  constructor(app: Application, editor: Editor){
    this.app = app;
    this.editor = editor;
  }

  saveBackup(){
    this.backup = this.editor.text;
  }

  undo(){
    this.editor.text = this.backup;
  }

  abstract execute(): boolean;
}

class CopyCommand extends Command {
  execute(){
    this.app.clipboard = this.editor.getSelection();
    return false;
  }
}
class CutCommand extends Command {
  execute(){
    this.saveBackup();
    this.app.clipboard = this.editor.getSelection();
    this.editor.deleteSelection();
    return true;
  }
}
class PasteCommand extends Command {
  execute(){
    this.editor.replaceSelection(this.app.clipboard);
    return true;
  }
}
class UndoCommand extends Command {
  execute(){
    this.app.undo();
    return false;
  }
}

class Editor {
  text: string;

  getSelection(): string {
    return "foo";
  }

  deleteSelection(){
    // delete...
  }

  replaceSelection(text: string){
    // Insert the clipboard's contents at the current position.
  }
}

class CommandHistory {
  private history: Command[];

  push(c: Command){
    this.history.push(c);
  }

  pop(): Command | undefined {
    return this.history.pop();
  }
}

class Application {
  editors: Editor[];
  activeEditor: Editor;
  clipboard: string;
  history: CommandHistory
  
  createUI(){
    const copy = ()=>{
      this.executeCommand(new CopyCommand(this, this.activeEditor))
    }
    
    // Some variables aren't defined
    copyButton.setCommand(copy);
    shortcuts.onKeyPress("Ctrl+C", copy)


    const cut = ()=>{
      this.executeCommand(new CutCommand(this, this.activeEditor))
    }
    cutButton.setCommand(cut);
    shortcuts.onKeyPress("Ctrl+X", cut)




    const paste = ()=>{
      this.executeCommand(new PasteCommand(this, this.activeEditor))
    }
    pasteButton.setCommand(paste);
    shortcuts.onKeyPress("Ctrl+V", paste)
    
    
    
    const undo = ()=>{
      this.executeCommand(new UndoCommand(this, this.activeEditor))
    }
    undoButton.setCommand(undo);
    shortcuts.onKeyPress("Ctrl+Z", undo)
  }

  executeCommand(c: Command){
    if(c.execute()){
      this.history.push(c);
    }
  }

  undo(){
    const command = this.history.pop();
    if(command){
      command.undo();
    }
  }
}