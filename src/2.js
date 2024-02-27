// interface ICharacter {
//   name: string;
//   level: number;
//   introduce(phrase: string): void;
//   levelUp(): void;
// }

// interface ISpellCaster {
//   castSpell(): void;
// }
// реалізація класу Wizard
class Wizard {
  name;
  level;
  constructor(name, level) {
    this.name = name;
    this.level = level;
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  introduce(phrase) {
    return phrase + ", " + this.name;
  }

  castSpell() {
    return "Casting a spell, behold my power!";
  }

  levelUp() {
    this.level += 10;
    return `Level up! New level is ${this.level}`;
  }
}

// тестування класу
const wizard = new Wizard("Merlin", 15);

console.log(wizard.introduce("I am the mighty wizard"));
console.log(wizard.castSpell());
console.log(wizard.levelUp());

// wizard.introduce("I am the mighty wizard");
// wizard.castSpell();
// wizard.levelUp(); // Level up! New level is 16
