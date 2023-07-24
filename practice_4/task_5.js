class IdException extends Error {
    constructor(message){
        super(message);
        this.name = 'IdException';
    }
}

function showUser(id){
    if (id < 0){
        throw new IdException('ID must not be negative');
    }
    return { id };
}

console.log(showUser(7));

function showUsers(ids) {
    let validUsers = [];
    for (let id of ids){
        try {
            let user = showUser(id);
            validUsers.push(user);
        } catch (error) {
            (error instanceof IdException) 
            console.log(error.name, error.message);;
        }  
    }
    return validUsers;
}

let ids = [5, 6, -7];
console.log(showUsers(ids));
