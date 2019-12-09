class Nologist {
  name: string;
  age: number;
  _languages: string[];
  constructor(name: string, age: number, _languages: string[]) {
    this.name = name;
    this.age = age;
    this._languages = _languages;
  }
  get languages() {
    return this._languages.join(", ");
  }
  greet() {
    return `Hi! My name is ${this.name}, I am ${this.age} years old, and I speak ${this.languages}.`;
  }
}

let shea = new Nologist("Shea", 26, ["English", "Mandarin"]);

console.log(shea.greet());
