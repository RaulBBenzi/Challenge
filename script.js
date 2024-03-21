const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem-text");
const removeImg = document.querySelector(".mensagem");
const botaoCopiar = document.querySelector(".botao-copiar");
const textoVazio = document.querySelector(".texto-vazio");


//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

function btnEncriptar() {
    displayRemove(); 

    console.log(textArea.value)
    
    console.log("Descriptar")
    console.log("TextArea", textArea.value)
    const textoEncriptado = encriptar(textArea.value);
    console.log("textoEncriptado", textoEncriptado)


   textArea.value = "";
   mensagem.innerHTML = textoEncriptado;
}



function encriptar(texto) {
    texto = texto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return texto

}

function descriptar(textoCriptografado) {
    textoCriptografado = textoCriptografado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoCriptografado.includes(matrizCodigo[i][1])) {
            textoCriptografado = textoCriptografado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return textoCriptografado;
}



function btnDescriptar() {
    displayRemove();

    console.log("Descriptar")
    console.log("TextArea", textArea.value)
    let  textoDescriptado = descriptar(textArea.value);
    console.log("textoDescriptado", textoDescriptado)

    textArea.value = "";  
    mensagem.innerHTML = textoDescriptado;

    console.log(mensagem)
}




function displayRemove(){
   removeImg.style.backgroundImage = 'none';
   botaoCopiar.style.display = 'block';
   textoVazio.remove();
   mensagem.style.display = 'block';
   mensagem.innerHTML = ""
}


function copiarTexto() {
    
    navigator.clipboard.writeText(mensagem.innerText);
}