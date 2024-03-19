// Mediator

class Component {
  dialog: Mediator;
  constructor(dialog){
    this.dialog = dialog;
  }

  click(){
    this.dialog.notify(this, "click");
  }
  
  keypress(key: string){
    this.dialog.notify(this, "keypress");
  }
}

class Button extends Component {
  
}

class Textbox extends Component {
  text: string = "";

  keypress(key: string): void {
    this.text += key;
    this.dialog.notify(this, 'keypress');
  }
}

class Checkbox extends Component {
  isChecked: boolean;

  check(){
    this.isChecked = !this.isChecked;
    this.dialog.notify(this, "check");
  }
}

interface Mediator {
  notify(sender: Component, event: string);
}

class AutheticationDialog implements Mediator{
  title: string;
  usernameField: Textbox;
  passwordField: Textbox;
  okBtn: Button
  rememberMe: Checkbox;
  loginOrRegisterCheck: Checkbox;

  constructor(){
    this.title = "Register";
    this.usernameField = new Textbox(this);
    this.passwordField = new Textbox(this);
    this.okBtn = new Button(this);
    this.rememberMe = new Checkbox(this);
    this.loginOrRegisterCheck = new Checkbox(this);
  }

  notify(sender: Component, event: string) {
    if(sender == this.loginOrRegisterCheck && event === "check"){
      this.title = this.loginOrRegisterCheck.isChecked ? "Log In" : "Register";
    }
    if(sender == this.okBtn && event === "click"){
      // check user credentials
      console.log({user: this.usernameField.text, pass: this.passwordField.text});
      
      if(this.rememberMe.isChecked){
        // Store user to use next time
      }
    }
  }
}

function main(){
  let authDialog = new AutheticationDialog();
  authDialog.loginOrRegisterCheck.check();
  authDialog.usernameField.keypress('f');
  authDialog.usernameField.keypress('o');
  authDialog.usernameField.keypress('o');

  authDialog.passwordField.keypress('b');
  authDialog.passwordField.keypress('a');
  authDialog.passwordField.keypress('r');

  authDialog.okBtn.click();
  
} 

main();