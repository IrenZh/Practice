let age = 14;

function checkAge(age) {
    try {
    if (!age){
        throw {
            name: 'EmptyFieldError:',
            message: 'The field is empty! Please enter your age',
        };
    }
    if (isNaN(age)){
        throw {
            name: 'InvalidAgeError:',
            message: 'Age must be number',
        };
    } 
    if (age <= 14){
        throw {
            name: 'AccessError:',
            message: 'You are too young',
        };
    }  
    console.log('You have access to watch the movie');
    }
    catch (error){
        console.error(error.name, error.message);
    }
}

checkAge(age);
