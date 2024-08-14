// funcao de copiar o numero de telefone
function copyToClipboard(text) {
  //acessa o clipboard e escreve o texto desejado
  navigator.clipboard.writeText(text);

  //faz um alerta avisando o usuario que o numero de telefone foi copiado
  alert("Copied " + text);
}
