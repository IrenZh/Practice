function findMin(){
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] < min){
            min = arguments[i];
        }
    }
    return min;
}

const result = findMin(12, 14, 4, -4, 0.2);
console.log(result)
