class Person {
    constructor (name, surname){
        this.name = name;
        this.surname = surname;
    } 
    showFullName() {
        return (this.name, this.surname);
    }
}

class Student extends Person {
    constructor (name, surname, year){
        super(name,surname);
        this.year = year;
    } 
    showFullName (middleName) {
        return `${this.surname} ${this.name} ${middleName}`;
    }
    showCourse() {
        const currentYear = new Date().getFullYear();
        let course = currentYear - this.year;
        return Math.max(1, Math.min(6, course));
    }
}

let stud1 = new Student("Petro", "Petrenko", 2020);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse());
