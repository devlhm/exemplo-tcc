// document.getElementById('cadastro-botao').addEventListener('click', () => {
//     cadastrar();
// });

// function cadastrar() {
//     const usuario = document.getElementById('cadastro-usuario').value;
//     const senha = document.getElementById('cadastro-senha').value;
//     const confirmacaoSenha = document.getElementById('cadastro-senhac').value;

//     if(senha != confirmacaoSenha) {
//         alert('A confirmação da senha está errada!')
//         return;
//     }

//     document.cookie = "usuario=" + usuario;
//     document.cookie = "senha=" + senha;

//     alert('Usuario cadastrado!');
//     document.getElementById('form-cadastro').reset;
// }
const nome = "joao";
const senha = "joao123";

document.getElementById("botao").addEventListener("click", login);

function login() {

    const formNome = document.getElementById('nome').value;
    const formSenha = document.getElementById('senha').value;

	if (nome == formNome && senha == formSenha) {
		alert("Login bem-sucedido!");
	} else {
		alert("Falha no login!");
	}
}
