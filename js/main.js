var conteudo = '';

$(window).on("load", function() {
	renderLayout(conteudo);
	// chamar as funções aqui...
})

function getData (span, div) {
	var data = $('#' + span).text();
	$('#' + div).text(data);
}

function getImg (span, div) {
	var img = $('#' + span).html();
	$('#' + div).html(img);
}

function getPrice (span, div) {
	var price = $('#' + span).text();
	price = parseFloat(price).toFixed(2);
	price = price.replace('.', ','); 
	$('#' + div).text(price);
}

function renderLayout (content) {
	$("#content").append(content);	
}

function writeText(str, el) {
	el = "#" + el;
	var char = str.split('').reverse();
  	var typer = setInterval(function() {
    	if (!char.length) return clearInterval(typer);
    	var next = char.pop();
   		el.innerHTML += next;
  	}, 35);

}
