"use strict";
const form = document.getElementById('login-form');
form.addEventListener("submit", event => {
    event.preventDefault();
    const request = new XMLHttpRequest();
    const formData = new FormData(form);
    console.log(...formData);
    request.addEventListener("load", event => alert(event.target.responseText));
    request.addEventListener("error", event => alert("Erro"));
    request.open("POST", "http://localhost:3000/login");
    request.send(formData);
});
