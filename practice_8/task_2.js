function checkEmail(email) {
    let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return regex.test(email);
  }
  
console.log(checkEmail("Qmail2@gmail.com")); 