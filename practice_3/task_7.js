function lastElem(arr, a = 1) {
    if (a >= arr.length) {
      return arr;
    }
  
    return arr.slice(-a);
  }
  
  console.log(lastElem([3, 4, 10, -5]));
  console.log(lastElem([3, 4, 10, -5], 2));
  console.log(lastElem([3, 4, 10, -5], 8));
