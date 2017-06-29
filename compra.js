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

//Adiciona ou diminui o numero de cookies e calcula o valor dos cookies
function addCookie(digito) {
	if (digito == 1) {
		cookie = cookie + 1;
		pCookie = cookie * 17;
	} else if (digito != 1 && cookie == 0) {
		cookie = cookie;
		pCookie = pCookie;
	} else {
		cookie = cookie - 1;
		pCookie = cookie * 17;
	}

	document.getElementById("cookie").innerHTML = "" + cookie;
	document.getElementById("pCookie").innerHTML = "" + pCookie + "R$";
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

	document.getElementById("brownie").innerHTML = "" + brownie;
	document.getElementById("pBrownie").innerHTML = "" + pBrownie + "R$";
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

	document.getElementById("geleia").innerHTML = "" + geleia;
	document.getElementById("pGeleia").innerHTML = "" + pGeleia + "R$";
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

	document.getElementById("pastinha").innerHTML = "" + pastinha;
	document.getElementById("pPastinha").innerHTML = "" + pPastinha + "R$";
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

	document.getElementById("molho").innerHTML = "" + molho;
	document.getElementById("pMolho").innerHTML = "" + pMolho + "R$";
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

	document.getElementById("torta").innerHTML = "" + torta;
	document.getElementById("pTorta").innerHTML = "" + pTorta + "R$";
}

//Calcula o valor total do pedido
function calcTotal(){
	total = pCookie + pBrownie + pTorta + pMolho + pPastinha + pGeleia;
	document.getElementById("total").innerHTML = "" + total;
}