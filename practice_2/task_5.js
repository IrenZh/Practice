let age = prompt("Please enter your age:", "");
let isAdult;

if (age >= 18) {
  isAdult = true;
  console.log("You have reached the age of majority");
} else if (age < 18) {
  isAdult = false;
  console.log("You are still too young");
} else {
  isAdult = false;
  console.log('It is not number');
};
