let submitButton = document.querySelector("#submit");
let form = document.getElementById("form");
let nameInput = form.name;
let emailInput = form.email;
let phoneInput = document.querySelector("#phone");
let messageInput = document.querySelector("#message");
let cancelButton = document.querySelector("#cancel");

//Dont know why values of inputs submitted are not showing here
cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Cancelled");
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        nameInput.value.length === 0 ||
        emailInput.value.length === 0 ||
        phoneInput.value.length === 0 ||
        messageInput.value.length === 0
    ) {
        window.alert("all input boxes must be filled");
        return;
    }

    if (isNaN(phoneInput.value)) {
        window.alert("phone number field must only contain numbers");
        return;
    }
    if (messageInput.value.length > 100) {
        window.alert("message field cannot have more than 100 characters");
        return;
    }

    window.alert("welcome " + nameInput.value);
});
