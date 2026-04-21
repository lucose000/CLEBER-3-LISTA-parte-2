function calcularFatorial() {
  let numero = prompt("Digite um número inteiro positivo:");

  if (numero === null || numero === "") {
    alert("Digite um valor válido!");
    return;
  }

  numero = Number(numero);

  if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    alert("Digite um número inteiro positivo!");
    return;
  }

  let fatorial = 1;
  let conta = "";

  for (let i = numero; i >= 1; i--) {
    fatorial *= i;
    conta += i;

    if (i > 1) {
      conta += " x ";
    }
  }

  if (numero === 0) {
    conta = "1";
  }

  document.getElementById("resultado").innerHTML =
    numero + "! = " + conta + "<br>Resultado: " + fatorial;
}