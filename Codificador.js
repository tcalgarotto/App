function encodeMessage(message) {
  let encodedMessage = '';

  for (let i = 0; i < message.length; i++) {
    // Obtém o código ASCII do caractere atual
    const charCode = message.charCodeAt(i);

    // Adiciona o código ASCII codificado à mensagem codificada
    encodedMessage += String.fromCharCode(charCode + 1);
  }

  return encodedMessage;
}

