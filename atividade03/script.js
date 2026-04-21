function calcularSoma() {
  let n = prompt("Digite um número inteiro positivo:");

  if (n === "") {
    alert("Digite um valor!");
    return;
  }

  n = Number(n);

  if (isNaN(n) || n <= 0) {
    alert("Digite um número positivo válido!");
    return;
  }

  let soma = 0;

  for (let i = 1; i <= n; i++) {
    soma += i;
  }

  let resultado = document.getElementById("resultado");

  resultado.innerHTML =
    "Número digitado: " + n + "<br>" +
    "Soma total: " + soma;
}