var usuario;
var user;

//Pega informação do botão de login
function getUser(){
	user = document.getElementById("user").value;
	document.getElementById("minhaConta").innerHTML = "Bem vindo " + user + "!"
}

//Pega informação do botão de cadastro
function getUsuario(){
	usuario = document.getElementById("usuario").value;
	document.getElementById("minhaConta").innerHTML = "Bem vindo " + usuario + "!"
}