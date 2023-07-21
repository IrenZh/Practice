function randArray(k) {
    let array = [];
    for (let i = 0; i < k; i++){
        let randomNumber = Math.floor(Math.random() * 500) + 1;
        array.push(randomNumber);
    }
    return array;
}

let result = randArray(5);
console.log(result);
