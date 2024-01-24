const pergunta1 = document.getElementById("pergunta-1");
const pergunta2 = document.getElementById("pergunta-2");
const pergunta3 = document.getElementById("pergunta-3");
const pergunta4 = document.getElementById("pergunta-4");
const resultado = document.getElementById("resultado");
const modal = document.getElementById("modal-overlay");
const background = document.getElementById("background");
const enviar = document.getElementById("enviar");
let contador = 0
let interruptorModal = false;

const verificaPergunta1 = () => {

  if (pergunta1.value == "4"){
    contador = contador + 1
  }

  if (pergunta2.value == "8"){
    contador = contador + 1
  }

  if (pergunta3.value == "12"){
    contador = contador + 1
  }

  if (pergunta4.value == "16"){
    contador = contador + 1
  }

  resultado.textContent = "Você acertou " + contador + " perguntas";
  verificaResultado()
  switchModal()
  enviar.style.visibility = "hidden"
}

const verificaResultado = () =>{
  if (contador == 0){
    resultado.textContent = "Você errou todas as perguntas!";
    background.style.backgroundColor = "red";
  }
    if (contador > 0 && contador < 4){
      resultado.textContent = "Você acertou " + contador + " perguntas";
      background.style.backgroundColor = "yellow";
    }
    if (contador == 4){
      resultado.textContent = "Você acertou todas as perguntas!";
      background.style.backgroundColor = "green";
    }
    
}

const zerarPergunta = () =>{
  contador = 0;
  pergunta1.value = '';
   pergunta2.value = '';
    pergunta3.value = '';
     pergunta4.value = '';
  resultado.textContent = '';
  background.style.backgroundColor = "purple";
  enviar.style.visibility = "visible"
}

const switchModal = () => {
  interruptorModal = !interruptorModal;
  modal.style.display = interruptorModal ? 'flex' : 'none';
}
