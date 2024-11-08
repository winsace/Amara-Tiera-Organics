function signup() {
            const fullName = document.getElementById("full-name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

            // Clear previous error messages
            document.getElementById("full-name-error").innerHTML = "";
            document.getElementById("email-error").innerHTML = "";
            document.getElementById("password-error").innerHTML = "";
            document.getElementById("confirm-password-error").innerHTML = "";

            if (fullName === "") {
                document.getElementById("full-name-error").innerHTML = "Please enter your full name";
            } else if (email === "") {
                document.getElementById("email-error").innerHTML = "Please enter your email address";
            } else if (!emailPattern.test(email)) {
                document.getElementById("email-error").innerHTML = "Please enter a valid email address";
            } else if (password === "") {
                document.getElementById("password-error").innerHTML = "Please create a password";
            } else if (password.length < 8) {
                document.getElementById("password-error").innerHTML = "Password must be at least 8 characters long";
            } else if (confirmPassword === "") {
                document.getElementById("confirm-password-error").innerHTML = "Please re-enter your password";
            } else if (password !== confirmPassword) {
                document.getElementById("confirm-password-error").innerHTML = "Passwords do not match";
            } else {
                // Send a request to the server to create a new account
                // For demonstration purposes, we'll just alert a success message
                alert("Account created successfully!");
            }
        }