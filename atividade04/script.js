function mostrarPares() {
  let texto = "";

  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      texto += i + " ";
    }
  }

  document.getElementById("resultado").innerHTML = texto;
}