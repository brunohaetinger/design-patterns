// PlayerStrategy
interface Player {
  tshirtNumber: number;
  overallSkill: number;

  shoot(): void;
}

class Neymar implements Player {
  tshirtNumber: number;
  overallSkill: number;

  constructor(){
    this.tshirtNumber = 10;
    this.overallSkill = 89;
  }

  shoot(): void {
    //...
  }
}

class Mbappe implements Player {
  tshirtNumber: number;
  overallSkill: number;

  constructor(){
    this.tshirtNumber = 7;
    this.overallSkill = 91;
  }

  shoot(): void {
    // ...
  }
}

// Context
class Team {
  private penaltyTaker: Player;

  //SetStrategy
  setPenaltyTaker(player: Player){
    this.penaltyTaker = player;
  }

  // Execute Strategy
  shootPenalty(){
    this.penaltyTaker.shoot();
  }
}

// Client
class Coach {
  team: Team;

  selectPenaltyTaker() {
    const isColdToday = true;
    if(isColdToday){
      this.team.setPenaltyTaker(new Neymar());
    } else {
      this.team.setPenaltyTaker(new Mbappe());
    }

    this.team.shootPenalty();
  }

}
