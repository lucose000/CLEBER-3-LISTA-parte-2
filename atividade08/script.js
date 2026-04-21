function iniciarCaixa() {
  let total = 0;
  let preco;

  do {
    preco = prompt("Digite o preço do produto (0 para finalizar):");

    if (preco === null) {
      alert("Operação cancelada.");
      return;
    }

    preco = Number(preco);

    if (isNaN(preco) || preco < 0) {
      alert("Digite um valor válido!");
      continue;
    }

    total += preco;

  } while (preco !== 0);

  document.getElementById("resultado").innerHTML =
    "Total da compra: R$ " + total.toFixed(2);
}