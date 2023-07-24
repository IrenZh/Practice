function showUser(id){
    if (id < 0){
        throw new Error ('ID must not be negative');
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
            console.error('ID must not be negative');

        }  
    }
    return validUsers;
}

let ids = [5, 6, -7];
console.log(showUsers(ids));
