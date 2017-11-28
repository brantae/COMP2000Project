function userLogin() {
    var email = prompt("Please enter your Auburn University email address.", "name@auburn.edu");
    if (email != null && email.includes("auburn")) {
        window.open('resources.html', '_self');
    } else {
      alert("Invalid email adress.");
    }
}
