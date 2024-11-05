function LoginCheck(){
    const EnteredUsername = document.getElementById("UsernameField").value;
    const EnteredPassword = document.getElementById("PasswordField").value;
    const InvalidPasswordField = document.getElementById("InvalidPW");
    const username1 = "admin";
    const password1 = "adminPW";


    if(EnteredUsername === username1 && EnteredPassword === password1){
        window.location.href = "dashboard.html";
    } else{
        InvalidPasswordField.innerHTML = "Invalid Username or Password";
    }
}