function encrypt() {
  //Gerar criptografia SHA-256
  var textToEncrypt = document.getElementById('text').value
  var text = sjcl.hash.sha256.hash(textToEncrypt)
  var hash = sjcl.codec.hex.fromBits(text)

  //Gerar chave RSA 1024 bits
  var secretPhrase = document.getElementById('secretText').value
  var bits = 1024
  var key = cryptico.generateRSAKey(secretPhrase, bits)
  //Retornar chave pública RSA
  var publicKey = cryptico.publicKeyString(key)

  //Escrever criptografia e chave na tela
  var response = document.getElementById('response-area')
  response.innerHTML =
    "<div class='response'><p > Esse é o texto encriptado com SHA256: </p>" +
    hash +
    '<p > Essa é a chave RSA: </p>' +
    "<div id='teste'>" +
    publicKey +
    '</div>' +
    '</div>'
}
