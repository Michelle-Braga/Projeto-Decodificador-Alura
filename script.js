var textInput = document.querySelector("#inserir-texto");
var outInput = document.querySelector("#resultado");

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "ilos").replace(/a/g, "oi").replace(/o/g, "ober").replace(/u/g, "umat")

    document.getElementById('resultado').innerHTML = '<textarea readonly id="inserir-texto">' + resultCripto + 
    '</textarea>' + '<button class="criptografar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('resultado').innerHTML = '<textarea readonly id="inserir-texto">' + resultDescripto + 
    '</textarea>' + '<button class="descriptografar" id="copiar" onclick="copiar()">Copiar</button>'
}
function copiar() {
    var textoCop = document.getElementById('inserir-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  