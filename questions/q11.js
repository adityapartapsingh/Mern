function Person(name, age) {
  this.name = name;
  this.age = age;

  this.introduce = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  };
}


const person1 = new Person("Alice", 25);


console.log(person1.name);
console.log(person1.age); 

person1.introduce();      
