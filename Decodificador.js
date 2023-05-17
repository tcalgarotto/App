function decodeMessage(encodedMessage) {
  let decodedMessage = '';

  for (let i = 0; i < encodedMessage.length; i++) {
    // Obtém o código ASCII do caractere codificado atual
    const charCode = encodedMessage.charCodeAt(i);

    // Adiciona o caractere decodificado à mensagem decodificada
    decodedMessage += String.fromCharCode(charCode - 1);
  }

  return decodedMessage;
}
