let inputString = "Java Script";
let outputString = inputString.replace(/(.*)(\s+)(.*)/, "$3$2$1");
console.log(outputString);