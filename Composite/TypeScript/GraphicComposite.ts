// Composite

interface Graphic {
  move(x, y)
  draw()
}


class Dot implements Graphic{
  x: number;
  y: number;
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  move(x, y){
    this.x = x;
    this.y = y;
  }

  draw(){
    // draw string with dot at x,y
  }
}


class Circle extends Dot {
  radius: number;

  constructor(x,y,radius){
    super(x,y)
    this.radius = radius
  }

  draw(): void {
    // draw string on x,y but borders away
  }
}

class CompondGraphic implements Graphic{
  children: Graphic[];

  add(child: Graphic){
    this.children.push(child);
  }

  remove(child: Graphic){
    this.children = this.children.filter(c => c !== child);
  }

  move(x, y){
    this.children.forEach(c => c.move(x, y));
  }

  draw(){
    this.children.forEach(c => c.draw());
  }
}

function main(){

  
} 

main();