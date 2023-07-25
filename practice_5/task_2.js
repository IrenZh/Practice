let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
    name: "Petro",
    age: 35,
};

let showProps = (obj) => {
    let propertyNames = Object.keys(obj);

    let propertyArray = [];
    let valuesArray = [];

    for (let name of propertyNames){
        propertyArray.push(name);
        valuesArray.push(obj[name]);
    }
    console.log('Property Array:', propertyArray)
    console.log('Values Array:', valuesArray)
}

showProps(mentor);
