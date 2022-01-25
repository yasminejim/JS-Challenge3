//1
function Person(name, job, age){
    this.name = name;
    this.job = job;
    this.age = age;

}
//2
Person.prototype.exercise = function() {
    console.log('Swimming is so fun!');

}

//3
let Yasmine = new Person("Yasmine")
let job = new job("Clerk")

Person.prototype.fetchJob = function() {console.log(`${this.name} is a ${this.job}`)};