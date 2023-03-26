

// class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // method definition
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// function definition
function greetPersons(persons) {
  persons.forEach(person => {
    person.greet();
  });
  
  return new Promise((resolve, reject) => {
    for (let i = 0; i < persons.length; i++) {
      console.log(`Hi ${persons[i].name}, it's good to have you here.`);
    }
    resolve();
  });
}

// array of Person objects
const persons = [
  new Person('Alice', 25),
  new Person('Bob', 30),
  new Person('Charlie', 35)
];

// call greetPersons function
greetPersons(persons)
  .then(() => {
    console.log('All persons greeted successfully.');
  })
  .catch(error => {
    console.error('Error greeting persons:', error);
  });
