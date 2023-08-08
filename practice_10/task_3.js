const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
function showNumbers(i = 0) {
    if (i <= 9) {
        delay(i, Math.random() * 3000) 
            .then(number => {
                console.log(number);
                return showNumbers(i + 1);
            })
            .catch(error => {
                console.error(error);
            });
    }
}

showNumbers();