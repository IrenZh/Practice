function checkLogin(login) {
    let regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    let numbers = login.match(/(\d+(\.\d+)?)/g) || [];
    if (regex.test(login)) {
        return true + "\n" + numbers.join(", ");
      } else {
        return false + "\n" + numbers.join(", ");
      }
    }
    
console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));