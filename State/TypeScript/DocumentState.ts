// State

interface State {
  render();
  publish(doc: DocumentPublication, user: User);
}

class User {
  role: "writer" | "admin";

  constructor(role: "writer" | "admin") {
    this.role = role;
  }
}

class Draft implements State{
  render() {
    console.log("Doc is on Draft");    
  }
  publish(doc: DocumentPublication, user: User) {
    if(user.role === "admin"){
      doc.changeState(new Published());
    } else {
      doc.changeState(new Moderation());
    }
  }
}
class Moderation implements State{
  render() {
    console.log("Doc is on Moderation");
  }
  publish(doc: DocumentPublication) {
    doc.changeState(new Published());
  }
}
class Published implements State{
  render() {
    console.log("Doc is Published!");
  }
  publish(doc: DocumentPublication) {
    console.log("Doc is already Published");       
  }
}

class DocumentPublication {
  state: State;

  constructor(){
    this.changeState(new Draft()); 
  }

  render(){
    this.state.render();
  }
  publish(user: User){
    this.state.publish(this, user);
  }
  
  changeState(state: State){
    this.state = state;
  }
}

function main(){
  const writer = new User("writer");
  const doc1 = new DocumentPublication();
  console.log('\n-- Writer user: --');
  doc1.render();
  doc1.publish(writer);
  doc1.render();
  doc1.publish(writer);
  doc1.render();
  doc1.publish(writer);
  
  console.log('\n-- Admin user: --');
  const admin = new User("admin");
  const doc2 = new DocumentPublication();
  doc2.render();
  doc2.publish(admin);
  doc2.render();
  doc2.publish(admin);
} 

main();