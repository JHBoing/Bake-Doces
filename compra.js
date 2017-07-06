var cookie = 0;
var pCookie = 0;
var brownie = 0;
var pBrownie = 0;
var geleia = 0;
var pGeleia = 0;
var pastinha = 0;
var pPastinha = 0;
var molho = 0;
var pMolho = 0;
var torta = 0;
var pTorta = 0;
var total = 0;

/* Carrega a quantidade e preço dos produtos quando a pagina é carregada */
function carregaProdutos() {
	if (localStorage.getItem("cookie") !== null) {
		$("#cookie").text(localStorage.getItem("cookie"));
		$("#pCookie").text(localStorage.getItem("pCookie") + "R$");
		cookie = parseInt(localStorage.getItem("cookie"));
	}

	if (localStorage.getItem("brownie") !== null) {
		$("#brownie").html(localStorage.getItem("brownie"));
		$("#pBrownie").html(localStorage.getItem("pBrownie") + "R$");
		brownie = parseInt(localStorage.getItem("brownie"));
	}

	if (localStorage.getItem("geleia") !== null) {
		$("#geleia").html(localStorage.getItem("geleia"));
		$("#pGeleia").html(localStorage.getItem("pGeleia") + "R$");
		geleia = parseInt(localStorage.getItem("geleia"));
	}

	if (localStorage.getItem("pastinha") !== null) {
		$("#pastinha").html(localStorage.getItem("pastinha"));
		$("#pPastinha").html(localStorage.getItem("pPastinha") + "R$");
		pastinha = parseInt(localStorage.getItem("pastinha"));
	}

	if (localStorage.getItem("molho") !== null) {
		$("#molho").html(localStorage.getItem("molho"));
		$("#pMolho").html(localStorage.getItem("pMolho") + "R$");
		molho = parseInt(localStorage.getItem("molho"));
	}

	if (localStorage.getItem("torta") !== null) {
		$("#torta").html(localStorage.getItem("torta"));
		$("#pTorta").html(localStorage.getItem("pTorta") + "R$");
		torta = parseInt(localStorage.getItem("torta"));
	}

	if (localStorage.getItem("total") !== null) {
		$("#total").html(localStorage.getItem("total"));
		total = localStorage.getItem("total");
	}

}

//Adiciona ou diminui o numero de cookies e calcula o valor dos cookies
function addCookie(digito) {
	if (digito == 1) {
		cookie = cookie + 1;
		pCookie = cookie * 17;
	} else if (digito == 0 && cookie == 0) {
		cookie = cookie;
		pCookie = pCookie;
	} else if (digito == 0 ) {
		cookie = cookie - 1;
		pCookie = cookie * 17;
	}

	localStorage.setItem("cookie", cookie);
	localStorage.setItem("pCookie", pCookie);
	$("#cookie").html(localStorage.getItem("cookie"));
	$("#pCookie").html(localStorage.getItem("pCookie") + "R$");
}

//Adiciona ou diminui o numero de brownies e calcula o valor dos brownies
function addBrownie(digito) {
	if (digito == 1) {
		brownie = brownie + 1;
		pBrownie = brownie * 16;
	} else if (digito != 1 && brownie == 0) {
		brownie = brownie;
		pBrownie = brownie;
	} else {
		brownie = brownie - 1;
		pBrownie = brownie * 17;
	}

	localStorage.setItem("brownie", brownie);
	localStorage.setItem("pBrownie", pBrownie);
	$("#brownie").html(localStorage.getItem("brownie"));
	$("#pBrownie").html(localStorage.getItem("pBrownie") + "R$");
}

//Adiciona ou diminui o numero de geleias e calcula o valor das geleias
function addGeleia(digito) {
	if (digito == 1) {
		geleia = geleia + 1;
		pGeleia = geleia * 18;
	} else if (digito != 1 && geleia == 0) {
		geleia = geleia;
		pGeleia = pGeleia;
	} else {
		geleia = geleia - 1;
		pGeleia = geleia * 18;
	}

	localStorage.setItem("geleia", geleia);
	localStorage.setItem("pGeleia", pGeleia);
	$("#geleia").html(localStorage.getItem("geleia"));
	$("#pGeleia").html(localStorage.getItem("pGeleia") + "R$");
}

//Adiciona ou diminui o numero de pastinhas e calcula o valor das pastinhas
function addPastinha(digito) {
	if (digito == 1) {
		pastinha = pastinha + 1;
		pPastinha = pastinha * 18;
	} else if (digito != 1 && pastinha == 0) {
		pastinha = pastinha;
		pPastinha = pPastinha;
	} else {
		pastinha = pastinha - 1;
		pPastinha = pastinha * 18;
	}

	localStorage.setItem("pastinha", pastinha);
	localStorage.setItem("pPastinha", pPastinha);
	$("#pastinha").html(localStorage.getItem("pastinha"));
	$("#pPastinha").html(localStorage.getItem("pPastinha") + "R$");
}

//Adiciona ou diminui o numero de molhos e calcula o valor dos molhos
function addMolho(digito) {
	if (digito == 1) {
		molho = molho + 1;
		pMolho = molho * 18;
	} else if (digito != 1 && molho == 0) {
		molho = molho;
		pMolho = pMolho;
	} else {
		molho = molho - 1;
		pMolho = molho * 18;
	}

	localStorage.setItem("molho", molho);
	localStorage.setItem("pMolho", pMolho);
	$("#molho").html(localStorage.getItem("molho"));
	$("#pMolho").html(localStorage.getItem("pMolho") + "R$");
}

//Adiciona ou diminui o numero de tortas e calcula o valor das tortas
function addTorta(digito) {
	if (digito == 1) {
		torta = torta + 1;
		pTorta = torta * 125;
	} else if (digito != 1 && torta == 0) {
		torta = torta;
		pTorta = pTorta;
	} else {
		torta = torta - 1;
		pTorta = torta * 18;
	}

	localStorage.setItem("torta", torta);
	localStorage.setItem("pTorta", pTorta);
	$("#torta").html(localStorage.getItem("torta"));
	$("#pTorta").html(localStorage.getItem("pTorta") + "R$");
}

//Calcula o valor total do pedido
function calcTotal(){
	total = pCookie + pBrownie + pTorta + pMolho + pPastinha + pGeleia;
	localStorage.setItem("total", total);
	$("#total").html(localStorage.getItem("total"));
}

//Carrega o pedido no modal

function conteudoFinal() {
	//Carrega os preços
	if (localStorage.getItem("cookie") !== null) {
		document.getElementById("pCookieF").innerHTML = localStorage.getItem("pCookie") + "R$";
	}

	if (localStorage.getItem("brownie") !== null) {
		document.getElementById("pBrownieF").innerHTML = localStorage.getItem("pBrownie") + "R$";
	}

	if (localStorage.getItem("torta") !== null) {
		document.getElementById("pTortaF").innerHTML = localStorage.getItem("pTorta") + "R$";
	}
	
	if (localStorage.getItem("molho") !== null) {
		document.getElementById("pMolhoF").innerHTML = localStorage.getItem("pMolho") + "R$";
	}
	
	if (localStorage.getItem("pastinha") !== null) {
		document.getElementById("pPastinhaF").innerHTML = localStorage.getItem("pPastinha") + "R$";
	}

	if (localStorage.getItem("geleia") !== null) {
		document.getElementById("pGeleiaF").innerHTML = localStorage.getItem("pGeleia") + "R$";
	}

	//Carrega o total
	if (localStorage.getItem("total") !== null) {
		document.getElementById("totalF").innerHTML = localStorage.getItem("total");
	}
}

function fechaModal() {
	localStorage.clear();
	location.reload();
}