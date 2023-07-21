let timeOfDay = new Date();
let currentHour = timeOfDay.getHours();
let greeting;

switch (true){
    case currentHour >= 23 || currentHour < 5:
        greeting = 'Good night';
        break;
    case currentHour >= 5 && currentHour < 11:
        greeting = 'Good morning';
        break;
     case currentHour >= 11 && currentHour < 17:
        greeting = 'Good day';
        break;
    case currentHour >= 17 && currentHour < 23:
        greeting = 'Good evening';
        break;
};

console.log(greeting);


