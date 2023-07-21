let result = prompt('Please enter your number:', '');

if (result > 0 && result % 2 === 0){
    console.log(result)
}
else if (result % 7 === 0){
    console.log(result)
}
else {
    console.log(`${result} is not even positive or a multiple of 7`)
};
