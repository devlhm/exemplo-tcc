"use strict";
const nome = "joao";
const senha = "joao123";
const botao = document.getElementById("botao");
botao.addEventListener("click", login);
function login() {
    const formNome = document.getElementById('nome').value;
    const formSenha = document.getElementById('senha').value;
    if (nome == formNome && senha == formSenha) {
        alert("Login bem-sucedido!");
    }
    else {
        alert("Falha no login!");
    }
}