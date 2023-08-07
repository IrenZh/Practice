function mul(...args) {
    let result = 1;
    let hasNumber = false;

    for (const arg of args) {
        if (typeof arg === "number") {
            result *= arg;
            hasNumber = true;
        }
    }

    return hasNumber ? result : 0;;
}
 console.log(mul(1, "str", 2, 3, true));
 console.log(mul(null, "str", false, true));