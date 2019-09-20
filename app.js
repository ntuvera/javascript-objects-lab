// =====================================================
// 1 Syntax - List and describe each individual piece of syntax that we used to construct and object. Don't leave anything out! This list is finite.
// =====================================================
const objectLiteral = {};
objectLiteral.name = 'George';
objectLiteral['species'] = 'ape';

function Monkey(name, species) {
  this.name = name;
  this.species = species;
}

const constructedObject = new Monkey('George', 'Ape');

const template = {
  name: 'George',
  species: 'Ape',
};

Object.create(template);

// =====================================================
// 2 Me
// =====================================================
const me = {};

me.name = 'Nate';
me.age = 34;
me.email = 'nate@place.com';

// console.log(me);

me['age'] = 43;

// console.log(me);

console.log(me.age);

me['place of residence'] = 'Edison, NJ';

console.log(me['place of residence']);

// =====================================================
// 3 Slimer
// =====================================================

const monster = {
  name: 'Slimer',
  color: 'greenish',
  type: 'plasm or ghost or something',
};

// 3.1
console.log(monster.name);
// 3.2
monster.type = 'creature';
// 3.3
monster['age'] = 6;
// 3.4
console.log(monster);
// 3.5
monster.introduce = function() {
  console.log("Hi I'm " + this.name + ', om nom nom nom nom om');
};

// monster.introduce();

// ===================================================================================================================
// 4 Ogres -- Create an auto running game with two characters.  Game ends when one character runs out of health points.
// ===================================================================================================================

// Game constructor function
function Game() {
  this.gameOver = false;
  this.turnNumber = 1;

  this.startGame = function() {
    const adventurer = new Adventurer('Elrick', 20, 8, 'Adventurer');
    const ogre = new Monster('Thrull', 40, 12, 'Mob Boss');

    logWinner = function() {
      if (adventurer.hp <= 0) {
        console.log('The Ogre has won, so long puny human.');
      }
      if (ogre.hp <= 0) {
        console.log(adventurer.name + ' has championed, For the Kingdom!.');
      }
    };

    while (!currentGame.gameOver) {
      if (currentGame.turnNumber % 2 == 1) {
        adventurer.attack(ogre);
      }
      if (currentGame.turnNumber % 2 == 0) {
        ogre.attack(adventurer);
      }

      currentGame.turnNumber++;

      if (currentGame.turnNumber == 200) {
        console.log('catch infinity');
        currentGame.gameOver = true;
      }

      if (adventurer.hp <= 0 || ogre.hp <= 0) {
        logWinner();
        currentGame.gameOver = true;
        console.log('Game Over');
      }
    }
  };
}

// Character constructor functions

function Adventurer(name, hp, str, job) {
  this.name = name;
  this.hp = hp;
  this.str = str;
  this.species = 'human';
  this.job = job;

  this.attack = function(target) {
    let damage = str;
    target.hp -= damage;
    console.log(
      this.name +
        '(' +
        this.hp +
        ') has attacked ' +
        target.name +
        ' for ' +
        damage +
        ' pts'
    );
  };
}

function Monster(name, hp, str, job) {
  this.name = name;
  this.hp = hp;
  this.str = str;
  this.species = 'ogre';
  this.job = job;

  this.attack = function(target) {
    let damage = Math.round(Math.random() * 10);
    target.hp -= damage;
    console.log(
      this.name +
        '(' +
        this.hp +
        ') has attacked ' +
        target.name +
        ' for ' +
        damage +
        ' pts'
    );
  };
}

// Start it up and Go.
let currentGame = new Game();
currentGame.startGame();
