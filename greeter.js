var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//var user = "Keyur Thakor";
//var user = [11,22,33]; //this will give error
//var user = {"firstName":"Denish","lastName":"Patel"}
var user = new Student("Vinit", "K", "Shah");
document.body.innerHTML = greeter(user);
