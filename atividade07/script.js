function gerarFibonacci() {
  let anterior = 0;
  let atual = 1;
  let texto = anterior + ", " + atual;

  for (let i = 3; i <= 10; i++) {
    let proximo = anterior + atual;
    texto += ", " + proximo;

    anterior = atual;
    atual = proximo;
  }

  document.getElementById("resultado").innerHTML =
    "Sequência de Fibonacci:<br>" + texto;
}