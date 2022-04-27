const nome : string = "joao";
const senha : string = "joao123";

const botao : HTMLElement = <HTMLElement> document.getElementById("botao");
botao.addEventListener("click", login);

function login() : void {

    const formNome : string = (<HTMLInputElement> document.getElementById('nome')).value;
    const formSenha : string = (<HTMLInputElement> document.getElementById('senha')).value;

	if (nome == formNome && senha == formSenha) {
		alert("Login bem-sucedido!");
	} else {
		alert("Falha no login!");
	}
}
