let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
    name: "Petro",
    age: 35,
};

let showProps = (obj) => {
    let propertyNames = Object.keys(obj);
    let valuesArray = Object.values(obj);

    console.log('Property Array:', propertyNames);
    console.log('Values Array:', valuesArray);
}

showProps(mentor);
