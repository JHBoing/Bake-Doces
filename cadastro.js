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
	//Faz a validação, não deixa completar cadastro sem preencher alguns campos
	if (document.getElementById("usuario").value == "") {
		$("#usuario").focus();
	} else if (document.getElementById("senha1").value == "") {
		$("#senha1").focus();
	} else if (document.getElementById("senha2").value == "") {
		$("#senha2").focus();
	} else if (document.getElementById("telefone").value == "") {
		$("#telefone").focus();
	} else {
		localStorage.setItem("usuario", document.getElementById("usuario").value);
		$("#minhaConta").html("Bem vindo " + localStorage.getItem("usuario") + "!");
		$("#minhaConta").append("<button type='button' class='btn btn-cadastro pull-right' onclick='reset()'>Sair</button>");
		$("#modCadastro").modal('toggle');
		$("#btn-carrinho").removeAttr("disabled");
	}
}

function getUserStorage() {
	//Faz a validação, não deixa logar na conta sem preencher campos
	if (document.getElementById("user").value == "") {
		$("#usuario").focus();
	} else if (document.getElementById("senha").value == "") {
		$("#senha").focus();
	} else {
		localStorage.setItem("user", document.getElementById("user").value);
		$("#minhaConta").html("Bem vindo " + localStorage.getItem("user") + "!");
		$("#minhaConta").append("<button type='button' class='btn btn-cadastro pull-right' onclick='reset()'>Sair</button>");
		$("#modEntrar").modal('toggle');
		$("#btn-carrinho").removeAttr("disabled");
	}
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