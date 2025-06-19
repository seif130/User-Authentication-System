var loginEmail = document.querySelector('#loginEmail');
var loginPassword = document.querySelector('#loginPassword'); 
var loginBtn = document.querySelector('#loginBtn');
var nameUp = document.querySelector('#nameInput');
var emailUp = document.querySelector('#emailInput');
var passwordUp = document.querySelector('#passwordInput');

var users = JSON.parse(localStorage.getItem('users')) || [];

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (document.querySelector('#signUpBtn')) {

document.querySelector('#signUpBtn').addEventListener('click', function () {
    
    if (nameUp.value == '' || emailUp.value == '' || passwordUp.value == '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!emailRegex.test(emailUp.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (users.some(u => u.email == emailUp.value)) {
        alert('This email is already registered.');
        return;
    }

    var user = {
        name: nameUp.value,
        email: emailUp.value,
        password: passwordUp.value
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful!");
    clearform();
});
}

if (loginBtn) {
  loginBtn.onclick = function() {
    var email = loginEmail.value;
    var password = loginPassword.value;

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    var user = users.find(u => u.email == email && u.password == password);

    if (user) {
    
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      window.location.href = "hello.html";
      clearform();
    } else {
      alert('Incorrect email or password');
    }
  };
}


  

function clearform() {
    nameUp.value = '';
    emailUp.value = '';
    passwordUp.value = '';
    loginEmail.value = '';
    loginPassword.value = '';
}
