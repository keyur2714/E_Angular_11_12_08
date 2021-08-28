class Student {
    fullName: string;	
	constructor(public firstName, public middleInitial, public lastName) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


interface Person {
	 firstName: string;
	 lastName: string;
}


function greeter(person : Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

//var user = "Keyur Thakor";
//var user = [11,22,33]; //this will give error
//var user = {"firstName":"Denish","lastName":"Patel"}
var user = new Student("Vinit","K","Shah")

document.body.innerHTML = greeter(user);
