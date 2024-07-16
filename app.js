alert("Seja bem vindo ao jogo do numero da sorte");

let numeroMaximo = 100;
let NumeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(NumeroSecreto);
let Tentativa;
let Tentativas = 1;

while (Tentativa != NumeroSecreto) {
  Tentativa = prompt("Escolha um numero entre 1 e " + numeroMaximo);

  if (Tentativa == NumeroSecreto) {
    break;
  } else {
    if (Tentativa < NumeroSecreto) {
      alert(" o Numero secreto e maior que " + Tentativa);
    } else {
      alert(" O numero secreto e menor que  " + Tentativa);
    }
  }

  Tentativas++;
}

let palavraTentativa = Tentativas > 1 ? " tentativas. " : " tentativa. ";
alert(
  "Parabens o numero secreto era : ( " +
    NumeroSecreto +
    " ) em  " +
    Tentativas +
    palavraTentativa
);
