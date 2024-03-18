document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        
        if (validateEmail(email) && validatePassword(password)) {
            console.log('Email: ' + email);
            console.log('Password: ' + password);
            
            // Here you would normally handle the login logic.
            alert('Login successful!');
        } else {
            alert('Invalid email or password!');
        }
    });
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    // This is a basic check for demonstration; you might need a more robust validation
    return password.length >= 5;
}
