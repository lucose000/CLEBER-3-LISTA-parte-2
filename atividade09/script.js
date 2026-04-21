function verificarIdades() {
  let maior;
  let menor;

  for (let i = 1; i <= 5; i++) {
    let idade = prompt("Digite a idade da pessoa " + i + ":");

    if (idade === null || idade === "") {
      alert("Digite um valor válido!");
      return;
    }

    idade = Number(idade);

    if (isNaN(idade) || idade < 0) {
      alert("Digite uma idade válida!");
      return;
    }

    if (i === 1) {
      maior = idade;
      menor = idade;
    } else {
      if (idade > maior) {
        maior = idade;
      }

      if (idade < menor) {
        menor = idade;
      }
    }
  }

  document.getElementById("resultado").innerHTML =
    "Maior idade: " + maior + "<br>" +
    "Menor idade: " + menor;
}