let numSorteados = [];
let numMax = 10;
let numSecreto = gerarNum();
let tentativas = 1;

function exibirTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speaak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10!');

}

mensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numSecreto){
        exibirTexto('h1', 'Acertou!');
        let pTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let numTentativas = `Parabens! Você acertou o número com ${tentativas} ${pTentativa}!`;
        exibirTexto('p', numTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numSecreto){
            exibirTexto('p', 'O número é menor.');
        } else {
            exibirTexto('p', 'O número é maior.');
        }
        tentativas++;
        limparTexto();
    }
}

function gerarNum() {
  let numGerado =    parseInt(Math.random() * numMax + 1);
  let quantNumLista = numSorteados.length;

  if (quantNumLista == numMax) {
    numSorteados = [];    
  }

  if (numSorteados.includes(numGerado)){
    return gerarNum();  
  } else {  
    numSorteados.push(numGerado)   
    return  numGerado;
  }
}

function limparTexto() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNum();
    limparTexto();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable', true);
}
