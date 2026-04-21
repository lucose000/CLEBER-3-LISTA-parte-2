function iniciarContagem() {
  let contador = 10;
  let mensagem = document.getElementById("mensagem");

  mensagem.textContent = contador;

  let intervalo = setInterval(function () {
    contador--;

    if (contador >= 0) {
      mensagem.textContent = contador;
    } else {
      mensagem.textContent = "DECOLAGEM!";
      clearInterval(intervalo);
    }
  }, 1000);
}