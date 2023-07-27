let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

let propsCount = (currentObject) => {
    let propertyNames = Object.keys(currentObject);
    return propertyNames.length;
}

console.log(propsCount(mentor));
