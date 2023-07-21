let data = [21, 'Carrot', true, null];

console.log(data.length);

let result = prompt('Enter your name:', '');
data.push(result);

console.log(data[4]);

data.pop();
console.log(data);
