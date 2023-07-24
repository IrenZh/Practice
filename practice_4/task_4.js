class MonthException extends Error {
    constructor(message){
        super(message);
        this.name = 'MonthException';
    }
}

const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

function showMonthName(monthNumber) {
    if (!monthNumber){
        throw new MonthException('The field is empty. Enter the number.');
    } 
    if (isNaN(monthNumber)){
        throw new MonthException('It is not a number. Enter the number.');
    }
    if (monthNumber >= 1 && monthNumber <= 12) {
        return months[monthNumber - 1];
    } else {
        throw new MonthException('Incorrect month number');
    }
}

try {
    console.log(showMonthName(6)); 
  } catch (error) {
    (error instanceof MonthException) 
    console.log(error.name, error.message);
}
