function raiseToDegree(a,b){
    if (a % 1 == 0 && b % 1 == 0){
        return  a ** b;
    } else {
        return 'It is not integers';
    }
};
let result = raiseToDegree(3, 2);
console.log(result);
