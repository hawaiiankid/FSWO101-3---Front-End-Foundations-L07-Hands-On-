function regexChecker() {
    let firstname = document.getElementById('firstName').value;
    let firstNameRegex = /[a-zA-Z]/;
    if (firstname.match(firstNameRegex)) {
        alert('Yay! Your inputs were all correct!');
        console.log(true);
    }
    else {
        alert('Oh no! Thats an invalid format!');
        console.log(false);
    }
}
function regexChecker() {
    let lastname = document.getElementById('lastName').value;
    let lastNameRegex = /[a-zA-Z]/;
    if (lastname.match(lastNameRegex)) {
        alert('Yay! Your inputs were all correct!');
        console.log(true);
    }
    else {
        alert('Oh no! Thats an invalid format!');
        console.log(false);
    }
}