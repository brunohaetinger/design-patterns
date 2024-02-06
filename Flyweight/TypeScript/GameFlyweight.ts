// Flyweight

interface Position {x: number, y: number}
type BulletType = "9mm" | "12mm" | "45mm";

class BulletFlyweightFactory {
  private cache: BulletFlyweight[]
  
  getFlyweight(repeatingState: BulletType): BulletFlyweight{
    const cached = this.cache.find(s => s.type === repeatingState);
    if(!cached){
      const bullet = new BulletFlyweight(repeatingState);
      this.cache.push(bullet);
      return bullet;
    }
    return cached;
  }
}

class BulletFlyweight {
  type: BulletType;
  
  constructor(repeatingState: BulletType){
    this.type = repeatingState;
  }

  move(position: Position){
    console.log(`Move bullet to position ${position.x}/${position.y}`)
  }
}

class BulletContext {
  private position: Position;
  private bullet: BulletFlyweight;

  constructor(repeatingState: BulletType, uniqueState: Position){
    this.position = uniqueState;
    this.bullet = new BulletFlyweightFactory().getFlyweight(repeatingState)
  }

  move(newPosition: Position){
    this.position = newPosition;
    this.bullet.move(this.position)
  }
}

class GameEngine {

  playerShoot(player1Position: Position, targetPosition: Position, playerWeaponAmmunition: BulletType){
    const bulletContext = new BulletContext(playerWeaponAmmunition, player1Position);
    bulletContext.move(targetPosition);
  }
}