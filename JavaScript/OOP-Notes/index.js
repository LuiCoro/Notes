/*
'use strict';

const Person = function (firstName, birthYear) {
  // INSTANCE PROPERTIES
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS!!! BAD PRACTICE!!!
  //   this.calcAge = function () {
  //     console.log(2021 - this.birthYear);
  //   }
};

const omi = new Person('Omi', 1998);
console.log(omi);

// 1. New Empty Obj is Created
// 2. Functiono is called, this = {New Obj}
// 3. {New Obj } is linked to prototype
// 4. fucntion automactically returns {obj}

const lui = new Person('Lui', 1998);
const bob = new Person('Bob', 1776);
console.log(lui, bob);

console.log(lui instanceof Person);

Person.hey = function () {
  console.log('Hey There 🖐');
  console.log(this);
}
Person.hey();




// PROTOTYPES
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

omi.calcAge();
bob.calcAge();

console.log(omi.__proto__);

// Prototype of object is set to Prototuype of Construccttor
console.log(omi.__proto__ === Person.prototype);//returns true

// CHeck to see if its a prototype of another object
console.log(Person.prototype.isPrototypeOf(omi));// True
console.log(Person.prototype.isPrototypeOf(bob));// True
console.log(Person.prototype.isPrototypeOf(Person));//False

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(omi.species, bob.species);

console.log(omi.hasOwnProperty('firstName')); //true
// Not in object on in protoype
console.log(omi.hasOwnProperty('speceis')); // false


console.log(omi.__proto__);
// Object.Prototype( top of prototype chain)
console.log(omi.__proto__.__proto__);
console.log(omi.__proto__.__proto__.__proto__);

const arr = [3, 6, 6, 5, 6, 9, 9]; //new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);


// CLASS EXPRESSION
// const PersonCl = class {}

// CLASS DECLERATION
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // INSTANCE METHODS
  // METHODS WILL BE ADDED TO .PROTOTYPE PROPERTY
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hi ${this.firstName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey There 🖐');
    console.log(this);
  }
};

const omii = new PersonCl('Omi Stoomi', 1998);
console.log(omi);
omi.calcAge();
console.log(omi.age);

console.log(omi.__proto__ === PersonCl.prototype);

// ADDING METHOD TO PROTOTYPE
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
omii.greet();

// 1.Classes are NOT Hoisted
// 2. Classes are first class citizens
// 3. Classes are exectued in strict mode!

const walter = new PersonCl('Walter Spoogi', 1965);

PersonCl.hey();

// Getters & Setters
const account = {
  owner: 'omi',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


// OBJECT CREATE:
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);
// Weird way of doing things
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();


 EXAMPLE:
class CarCl{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }

  acclerate(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }

  brake(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }

  get speedUS(){
    return this.speed / 1.6;
  }
  set speedUS(speed){
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS)
ford.acclerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
 */


// inheritance BETWEEN CLASSES: CONTRUCKTOR FUNCTIONS

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  // INSTEAD OF HAVING DUPLICATE CODE CALL FUNCTION!
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.course = course;
}

// Linkning Prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}!`)
}

const omi = new Student('Omi', 1998, 'Full Stack Dev');

omi.introduce();
omi.calcAge();

console.log(omi.__proto__);
console.log(omi.__proto__.__proto__);

console.log(omi instanceof Student);
console.log(omi instanceof Person);
console.log(omi instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


// INHERITANCE BETWEEN CLASSES ES6 CLASSES:

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Method:
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!!!`)
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method:
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Parents Constructor goes here: (ALWAYS HAPPENS FIRST)
    // SUPER() CREATES .this
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}!`)
  }

  calcAge() {
    console.log(`I'm ${2021 - this.birthYear} years old, but as a student I feel more like a ${2021 - this.birthYear + 10}`)
  }
}

const bob = new StudentCl('Bob Szoomi', 1755, 'Pizza Doc.');
bob.introduce();
bob.calcAge();


// INHERITANCE BETWEEN CLASSES: OBJECT.create
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const omi = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}


const bob = Object.create(StudentProto);
bob.init('Bob', 2010, 'Full Stack Dev.');
bob.introduce();
bob.calcAge();



class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public Interafce
  getMovemonet() {
    return this._movements
  }
  deposit(val) {
    this._movements.push(val)
  }
  withdraw(val) {
    this.deposit(-val)
  }
  _approveLoan(val) {
    return true
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved `)
    }
  }
}

const acc1 = new Account('Omi', 'DogeCoin', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-150);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(2000);
console.log(acc1.getMovemonet());

console.log(acc1);
// No longer shows
console.log(acc1.pin);
// NOW SHOWS!
console.log(acc1._pin);

// Encapsulation: Private Class Feilds and Methods:

// 1. PUBLIC FIELDS
// 2. PRIVATE FIEDLS
// 3. PUBLIC METHODS
// 4. PRIVATE METHODS
// ( THERE IS ALSO THE STATIC VERSION )


class Account {
  // 1. PUBLIC FIELDS(On Instances NOT ON PROTOYPES )
  locale = navigator.language;

  // 2. PRIVATE FIELDS( INSTANCES )
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this.#pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3. PUBLIC METHODS

  // Public Interafce
  getMovemonet() {
    return this.#movements
  }
  deposit(val) {
    this.#movements.push(val)
  }
  withdraw(val) {
    this.deposit(-val)
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved `)
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4. PRIVATE METHODS ( CURRENTLY BRING WORDKED ON! ):
  // #approveLoan(val) {
  _approveLoan(val) {
    return true
  }
}

const acc1 = new Account('Omi', 'DogeCoin', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(2000);
console.log(acc1.getMovemonet());
console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(1000));

Account.helper();


// CHAINING METHODS:
class Account {
  locale = navigator.language;
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  getMovemonet() {
    return this.#movements
  }
  deposit(val) {
    this.#movements.push(val)
    return this;
  }
  withdraw(val) {
    this.deposit(-val)
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved `)
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  _approveLoan(val) {
    return true
  }
}

const acc1 = new Account('Omi', 'DogeCoin', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(2000);
console.log(acc1.getMovemonet());
console.log(acc1);
Account.helper();
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(1000));

// CHANGING:
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovemonet());

*/

// ES6 CLASSES SUMMARY:
// Student: CHILD CLASS
// PERSON: PARENT CLASS
// EXTENDS: INHERITANCE BETWEEN CLASSES, AUTOMATICALLY SETS PROTOYPE
class Student extends Person {

  // UNIVRTSITY: PUBLIC FIELD(SIMLIMAR TO PROPERTY, AVAILABLE ON CREATED OBJECT)
  university = 'University of Libson';

  // STUDYHOURS & COURSE: PRIVATE FIELDS (NOT ACCESSIBLE OUTSIDE OF CLASS)
  #studyHours = 0;
  #course;

  // STATIC PUBLIC FIELD: (AVAILABLE ONLY ON CLASS)
  static nunSubjects = 10;

  // CONSTRUCTOR METHOD: CALLED BY NEW OPERATOR. MANDATORY IN REGULAR CLASS, MIGHT BE OMITTED IN A CHILD CLASS
  constructor(fullName, birthYear, startYear, course) {

    // SUPER: CALL TO PARENT (super) CLASS ( NECESSARY WITH EXTEND!). NEEDS TO HAPPEN BEFORE ACCESSING  this.
    super(fullName, birthYear);

    // this.'': INSTANCE PROPERTY (AVAIABLE ON CREATED OBJECT)
    this.startYear = startYear;

    // #COURSE: REDFINING PRIVATE FEILD ( SEE LINE 555) 
    this.#course = course;
  }
  // INTRODUCE(): PUBLIC METHIOD
  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }
  study(h) {

    // BELOW IS REFENCING PRIVATE FIELD AND METHODS
    // PRIVATE METHOD
    this.#makeCoffe();
    // PRIVATE FIELD
    this.#studyHours += h;
  }

  // PRIVATE METHODS:( 🚧 MIGHT NOT WORK YET ON YOUR BROWSER. "FAKE" ALTERNATIVE( _ ) instead of ( # ) )
  #makeCoffe() {
    return `Here is your coffee for you 🤓`;
  }

  // Getter method: (GETS VALUSE OUT OF OBJECT)
  get testScore() {
    return this._testScore;
  }

  // SETTER METHOD: (USE _ TO SET PROPERTY WITH SAME NAME AS METHOD, AND ALSO ADD GETTER)
  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }

  // STATIC METHOD: (AVAILABLE ONLY ON CLASS. CAN NOT ACCESS INSTANCE PROPERTIES NOR METHODS, ONLY STATIC ONES)
  static printCurriculum() {
    console.log(`There are ${this.nunSubjects} subjects`)
  }
}
// CREATING NEW OBJECT WITH NEW OPERATOR!
const student = new Student('Omi', 1998, 2021, 'Full Stack Dev.');

/** THINGS TO REMEMBER!!!!
 * CLASSES ARE JUST "SYNTACTIC SUGAR" OVER CONSTRUCTOR FUNCTIONS
 *
 * CLASSES ARE NOT HOISTED
 *
 * CLASSES ARE FIRST-CLASS CITIZENS
 *
 * CLASS BODY IS ALWAYS EXECUTED IN STRICT MODE
 */

