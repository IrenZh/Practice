function calcArrProduct(arr) {
    return new Promise(function(resolve, reject) {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                reject("Error! Incorrect array!");
            }
            product *= arr[i];
        }
        resolve(product);
    });
}

calcArrProduct([3,4,5]).then(result => console.log(result)); 
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result))
.catch(error => console.log(error));
