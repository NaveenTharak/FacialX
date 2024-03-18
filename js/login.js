document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        
        // Determine the type of user and redirect accordingly
        var userRole = getUserRole(email, password);
        
        if (userRole === 'teacher') {
            // Redirect to the teacher's home page
            window.location.href = 'homeTeacher.html';
        } else if (userRole === 'admin') {
            // Redirect to the admin dashboard
            window.location.href = 'adminDashboard.html';
        } else {
            // If credentials don't match, alert the user
            alert('Invalid email or password!');
        }
    });
});

function getUserRole(email, password) {
    // Hardcoded user credentials for demonstration
    const credentials = {
        'teacher@gmail.com': { password: 'teacher123', role: 'teacher' },
        'admin@gmail.com': { password: 'admin123', role: 'admin' }
    };

    var lowerCaseEmail = email.toLowerCase();
    if (credentials[lowerCaseEmail] && credentials[lowerCaseEmail].password === password) {
        return credentials[lowerCaseEmail].role;
    }
    
    return null;
}
