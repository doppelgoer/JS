function printLabel(labeledObj) {
  console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

class Student {
  #name;
  math;
  english;
  science;

  constructor(name, math, english, science) {
    this.#name = name;
    this.math = math;
    this.english = english;
    this.science = science;
  }
  get name() {
    return this._name;
  }
}
