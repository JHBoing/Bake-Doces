var usuario;
var user;

/*
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
*/
function getUsuarioStorage() {
	localStorage.setItem("usuario", document.getElementById("usuario").value);
	$("#minhaConta").html("Bem vindo " + localStorage.getItem("usuario") + "!");
	$("#minhaConta").append("<button type='button' class='btn btn-cadastro pull-right' onclick='reset()'>Sair</button>");
}

function getUserStorage() {
	localStorage.setItem("user", document.getElementById("user").value);
	$("#minhaConta").html("Bem vindo " + localStorage.getItem("user") + "!");
	$("#minhaConta").append("<button type='button' class='btn btn-cadastro pull-right' onclick='reset()'>Sair</button>");
}

function carregaUsuario() {
	if (localStorage.getItem("usuario") !== null) {
		$("#minhaConta").html("Bem vindo " + localStorage.getItem("usuario") + "!");
		$("#minhaConta").append("<button type='button' class='btn btn-cadastro pull-right' onclick='reset()'>Sair</button>");
	}
}

function carregaUser() {
	if (localStorage.getItem("user") !== null) {
		$("#minhaConta").html("Bem vindo " + localStorage.getItem("user") + "!");
		$("#minhaConta").append("<button type='button' class='btn btn-cadastro pull-right' onclick='reset()'>Sair</button>");
	}
}

function reset() {
	localStorage.clear();
	location.reload();
}