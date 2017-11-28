function userLogin() {
    var email = prompt("Please enter your email", "name@auburn.edu");
    if (email != null && email.includes("auburn")) {
        document.getElementById("login").innerHTML =
        "Hello " + email + "! You have successfully logged in.";
    }
}
