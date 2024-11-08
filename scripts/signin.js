function login() {
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                const errorMessage = document.getElementById("error-message");

                if (email === "") {
                    errorMessage.innerHTML = "Please enter your email address";
                    return;
                }

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    errorMessage.innerHTML = "Please enter a valid email address";
                    return;
                }

                if (password === "") {
                    errorMessage.innerHTML = "Please enter your password";
                    return;
                }

                if (email !== "test@amaratiera.com" || password !== "Test@123") {
                    errorMessage.innerHTML = "Invalid email or password";
                    return;
                }

                // Login successful, show 2FA popup
                closePopup(); // Ensure forgot password popup is closed
                document.getElementById("twofa-popup").style.display = "flex"; // Show 2FA popup
            }

            function verifyTwoFACode() {
                const twoFACode = document.getElementById("twofa-code").value;
                const twoFAError = document.getElementById("twofa-error");

                if (twoFACode === "") {
                    twoFAError.innerHTML = "Please enter the 6-digit code";
                    return;
                }

                if (twoFACode !== "123456") {
                    twoFAError.innerHTML = "Invalid code. Please try again.";
                    return;
                }

                // 2FA successful, redirect to home
                window.location.href = "home.html"; // Redirect to home
            }

            function closeTwoFAPopup() {
                document.getElementById("twofa-popup").style.display = "none";
            }

            function showPopup() {
                document.getElementById("forgot-password-popup").style.display = "flex";
            }

            function closePopup() {
                document.getElementById("forgot-password-popup").style.display = "none";
            }

            function sendForgotPasswordEmail() {
                const forgotEmail = document.getElementById("forgot-email").value;
                const forgotEmailError = document.getElementById("forgot-email-error");

                if (forgotEmail === "") {
                    forgotEmailError.innerHTML = "Please enter your email address";
                    return;
                }

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(forgotEmail)) {
                    forgotEmailError.innerHTML = "Please enter a valid email address";
                    return;
                }

                // Send forgot password email logic here
                alert("Forgot password email sent successfully!");
                closePopup();
            }