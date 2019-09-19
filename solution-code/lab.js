/**
  1. Syntax
  new Object() the `new` keyword (object constructor)
  {} curly braces (object literal)
  function MyObject() { } (constructor function)
  Object.create(MyObject) (use `Object.create`)
 */

/**
  2.  Me
 */

const me = {};
me.name = "Kristyn";
me.age = 98;
me.email = "kristyn@foo.bar";

console.log(me.name);
me['age'] = 1000;
console.log(me.age);
me['place of residence'] = "Chicago";
console.log(me['place of residence']);

/**
  3. Slimer
 */

 const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name);
monster.type = 'creature';
monster.age = 6;
console.log(monster);
monster.sayHello = function() {
  console.log(`Hello! I am ${this.name}. I am a ${this.type} and I look kinda ${this.color}.`);
};

monster.sayHello();

/**
  4. Ogres
 */

 const adventurer = {
   name: "Link",
   hitpoints: 40,
   damage: 5,
   attack: function(target) {
     target.hitpoints -= this.damage;
   }
 };

 const ogre = {
   name: "Ganon",
   hitpoints: 50,
   damage: function() {
     return Math.floor(Math.random() * 10);
   },
   attack: function(target) {
     target.hitpoints -= this.damage();
   }
 };

const game = {
  winner: null,
  rounds: 0,
  play: function(player, monster) {
    console.log(`${player.name} attacks ${monster.name}!\n`);
    player.attack(monster);
    console.log(`${monster.name} now has ${monster.hitpoints} hp left.`);
    if (monster.hitpoints > 0) {
      console.log(`${monster.name} attacks ${player.name}!\n`);
      monster.attack(player);
      console.log(`${player.name} now has ${player.hitpoints} hp left.`);
    }

    if (player.hitpoints <= 0) {
      this.winner = monster;
    }

    if (monster.hitpoints <= 0) {
      this.winner = player;
    }
  }
};

while (game.winner === null) {
  game.play(adventurer, ogre);
}

console.log(`${game.winner.name} wins!`);

/**
  Cat Combinator

  1. Mama Cat
 */

 const cat1 = {
   name: 'Jam',
   breed: 'Siamese',
   age: 45
 };

 console.log(cat1.age);
 console.log(cat1.breed);

/**
  2. Papa Cat
 */

 const cat2 = {
   name: 'Joe',
   breed: 'Mog',
   age: 19
 };

 const combineCats = (mama, papa) => {
   return {
     name: mama.name + papa.name,
     age: 1,
     breed: `${mama.breed}-${papa.breed}`
   };
 };

 console.log(combineCats(cat1, cat2));

 console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

 console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));
