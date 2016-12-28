function greeter(person:Person) {
	return "Hello, " + person.firstName;
}

var user = "Ene"
var tab = [1,2,3]

interface Person {
	firstName:string
	lastName:string
}

var person =  {firstName:"aaaa", lastName:"ccc"}
document.body.innerHTML = greeter(person);

class Student {
	fullname:string;
	constructor(public firstName, public middleInitial, public lastName) {
		this.fullname = firstName + " " + middleInitial + " " + lastName;
	}
}

var student = new Student("Eugeniusz", "Franciszek", "Neugebauer");
document.body.innerHTML = greeter(student);
