class Worker {
    constructor (fullName, dayRate, workingDays ){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }
    showSalary(){
        let salary = this.dayRate * this.workingDays;
        return salary;
    }
    showSalaryWithExperience(){
        let salaryExperience = this.dayRate * this.workingDays * this._experience;
        return salaryExperience;
    }
    get showExp(){
        return this._experience;
    }
    set setExp(experience){
        this._experience = experience;
    }
} 

let worker1 = new Worker("John Johnson", 20, 23);

console.log(worker1.fullName);                 
worker1.showSalary();
console.log("Experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();


let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

let workers = [worker1, worker2, worker3]

workers.sort((a,b) => {
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
})

console.log("\nSorted salary:");
for (const worker of workers) {
  console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
}
