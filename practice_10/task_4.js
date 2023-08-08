const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
    for (let i = 0; i <= 9; i++) {
        try {
            const number = await delay(i, Math.random() * 3000);
            console.log(number);
        } catch (error) {
            console.error(error);
        }
    }
}

showNumbers();