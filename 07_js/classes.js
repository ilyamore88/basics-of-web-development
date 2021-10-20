class Person {
    constructor(lastname, firstname) {
        this._lastname = lastname;
        this._firstname = firstname;
    }

    get name() {
        return this._firstname;
    }

    set name(firstname) {
        this._firstname = firstname;
    }

    sleep() {
        return 'Zzz';
    }

    hello(firstname) {
        console.log('Hello,', firstname);
    }

    static whatIs() {
        return 'This is a person ';
    }
}

// // person.name = 'Никита';
// // console.log(person.sleep());
// person.hello('Никита');
// console.log(Person.whatIs());

class Student extends Person {
    constructor(lastname, firstname, course) {
        super(lastname, firstname);
        this._cource = course;
    }

    eat() {
        console.log(this._firstname + ' is eating');
    }
}

const student = new Student('Мороз', 'Илья', 4);
console.log(student);
student.hello('Никита');
student.eat();
