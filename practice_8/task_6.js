function checkEmail(email) {
    let regex = /^[A-Za-z0-9][A-Za-z0-9_-]*@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    
    if (regex.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
  }
  
  console.log(checkEmail('my_mail@gmail.com')); 
  console.log(checkEmail('#my_mail@gmail.com'));