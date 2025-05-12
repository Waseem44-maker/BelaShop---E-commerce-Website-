// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sign In Form
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Simple validation
            if (!email || !password) {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            // Here you would typically send data to your backend
            // For demo purposes, we'll simulate a successful login
            simulateLogin(email, password, remember);
        });
    }
    
    // Sign Up Form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.getElementById('terms').checked;
            
            // Validation
            if (!name || !email || !password || !confirmPassword) {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showAlert('Passwords do not match', 'error');
                return;
            }
            
            if (password.length < 8 || !/\d/.test(password)) {
                showAlert('Password must be at least 8 characters with one number', 'error');
                return;
            }
            
            if (!terms) {
                showAlert('You must agree to the terms and conditions', 'error');
                return;
            }
            
            // Here you would typically send data to your backend
            // For demo purposes, we'll simulate a successful registration
            simulateRegistration(name, email, password);
        });
    }
});

// Simulate login (for demo purposes)
function simulateLogin(email, password, remember) {
    // In a real app, you would make an API call here
    console.log('Login attempt with:', { email, password, remember });
    
    // Simulate API delay
    setTimeout(() => {
        // Store user data in localStorage (for demo purposes)
        localStorage.setItem('currentUser', JSON.stringify({
            email: email,
            name: email.split('@')[0] // Simple way to get a name from email
        }));
        
        if (remember) {
            localStorage.setItem('rememberMe', 'true');
        }
        
        showAlert('Login successful! Redirecting...', 'success');
        
        // Redirect to home page after a delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 800);
}

// Simulate registration (for demo purposes)
function simulateRegistration(name, email, password) {
    // In a real app, you would make an API call here
    console.log('Registration attempt with:', { name, email, password });
    
    // Simulate API delay
    setTimeout(() => {
        // Store user data in localStorage (for demo purposes)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        
        // Also log the user in
        localStorage.setItem('currentUser', JSON.stringify({ name, email }));
        
        showAlert('Registration successful! Redirecting...', 'success');
        
        // Redirect to home page after a delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 800);
}

// Show alert message
function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `alert-message ${type}`;
    alert.textContent = message;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(alert);
        }, 300);
    }, 3000);
}