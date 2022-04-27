const form : HTMLFormElement = <HTMLFormElement>document.getElementById('login-form');

form.addEventListener("submit", event => {
	event.preventDefault()

	const request : XMLHttpRequest = new XMLHttpRequest();
	const formData : FormData = new FormData(form);

	request.addEventListener("load", event => alert((<any> event.target).responseText));

	request.open("POST", "http://localhost:3000/login");
	request.send(formData);
})