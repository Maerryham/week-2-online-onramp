let submitButton = document.querySelector('#submit');
let form = document.getElementById('form');
let nameInput = form.name.value;
let emailInput = form.email.value;
let phoneInput = document.querySelector('#phone').value;
let messageInput = document.querySelector('#message').value;

//Dont know why values of inputs submitted are not showing here
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameInput.length === 0 || emailInput.length === 0 || phoneInput.length === 0 || messageInput.length === 0) {
        window.alert('all input boxes must be filled');
        console.log(emailInput, 'Value');
        console.log(emailInput.length, 'length');
        return;
    }

    if (!phoneInput.match(/[0-9]/)) {
        window.alert('phone number field must only contain numbers');
        return;
    }
    if (messageInput.length > 100) {
        window.alert('message field cannot have more than 100 characters');
        return;
    }

    window.alert('welcome ' + nameInput);
});
