function jogarAdivinhacao() {
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let tentativa;
  let contador = 0;

  do {
    tentativa = prompt("Adivinhe o número de 1 a 10:");

    if (tentativa === null || tentativa === "") {
      alert("Digite um valor válido!");
      return;
    }

    tentativa = Number(tentativa);

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
      alert("Digite um número entre 1 e 10!");
      continue;
    }

    contador++;

    if (tentativa !== numeroSecreto) {
      alert("Errou! Tente novamente.");
    }

  } while (tentativa !== numeroSecreto);

  document.getElementById("resultado").innerHTML =
    "🎉 Parabéns! Você acertou o número " + numeroSecreto +
    " em " + contador + " tentativa(s).";
}