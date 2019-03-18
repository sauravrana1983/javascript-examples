class Person {
    constructor(name=''){
        if(typeof Person.instance === 'object'){
            return Person.instance;
        }
        Person.instance = this;
        this.name = name;
        return this;
    }

    getName(){
        return this.name;
    }
}

class Student extends Person {
    getStudentName(){
        return this.getName();
    }
}


const firstInstance = new Person('First');
const secondInstance = new Person('Second');
const thirdInstance = new Person('');

console.log(firstInstance.getName());
console.log(secondInstance.getName());
console.log(thirdInstance.getName());

const student = new Student();

console.log('getName' in student);  // returns true
console.log('getStudentName' in student); // returns false  ---> Why this returns false?