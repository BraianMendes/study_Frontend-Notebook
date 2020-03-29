const team = {
  _players: [{
    firstName: 'Braian',
    lastName: 'Correa',
    age: 25
  },{
    firstName: 'Kelson',
    lastName: 'Correa',
    age: 24
  }, {
    firstName: 'Alber',
    lastName: 'Correa',
    age: 21
  }],
  
    _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },{
    opponent: 'NY Titans',
    teamPoints: 30,
    opponentPoints: 29
  },{
    opoonent: 'New England',
    teamPoints: 51,
    opponentPoints: 32
  }],
  
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    
    this.players.push(player);
  },
  
  addGame(opponentName, teamPoints, opponentPoins){
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoins: opponentPoins
    };
    
    this.games.push(game);
  }
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

team.addGame('Eagles', 30, 25);

console.log(team);
