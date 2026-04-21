function validarSenha() {
  let senha = prompt("Crie uma senha:");

  // valida criação da senha
  if (senha === null || senha === "") {
    alert("Senha inválida! Reinicie o processo.");
    return;
  }

  let tentativa;

  do {
    tentativa = prompt("Digite a senha:");

    // usuário clicou cancelar
    if (tentativa === null) {
      alert("Operação cancelada.");
      return;
    }

    if (tentativa !== senha) {
      alert("Senha incorreta, tente novamente!");
    }

  } while (tentativa !== senha);

  alert("Acesso concedido! ✅");
}