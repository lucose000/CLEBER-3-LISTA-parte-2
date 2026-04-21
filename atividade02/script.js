function gerarTabuada() {
  let numero = prompt("Digite um número:");

  if (numero === "") {
    alert("Digite um valor!");
    return;
  }

  numero = Number(numero);

  if (isNaN(numero)) {
    alert("Digite apenas números!");
    return;
  }

  let resultado = document.getElementById("resultado");
  let texto = "";

  for (let i = 1; i <= 10; i++) {
    texto += numero + " x " + i + " = " + (numero * i) + "<br>";
  }

  resultado.innerHTML = texto;
}