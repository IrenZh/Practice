let age = 14;

function checkAge(age) {
    try {
    if (!age){
        throw new Error ('The field is empty!  Please enter your age');
    } 
    if (isNaN(age)){
        throw new Error ('Age must be number');
    } 
    if (age <= 14){
        throw new Error ('You are too young');
    }  
    console.log('You have access to watch the movie');
    }
    catch (error){
        console.error('Error:', error.message);
    }
}

checkAge(age);
