window.cipher = {
  encode: (text, offset) => { // texto y desplazamiento
    let msj = ""; // declarar el nombre de la función para que guarde el texto, por el momento vacío.
    for (let index = 0; index < text.length; index++) { // Inicio del bucle que pasará por cada dato del texto.
      let textToAscii = text.charCodeAt(index); //obtener codigo ascii
      if (textToAscii >= 65 && textToAscii <= 90) { //condicion con los límites de mayúsculas
        let asciiMayuscula = (textToAscii - 65 + parseInt(offset)) % 26 + 65; // formula cipher
        let asciiLetterMayuscula = String.fromCharCode(asciiMayuscula); //Pasar a letras normales
        msj += asciiLetterMayuscula; //Concatena el mensaje
      }
      else if (textToAscii >= 97 && textToAscii <= 122) { //condicion con los límites de minusculas
        let asciiMinuscula = (textToAscii - 97 + parseInt(offset)) % 26 + 97; // formula cipher
        let asciiLetterMinuscula = String.fromCharCode(asciiMinuscula); //Pasar a letras normales
        msj += asciiLetterMinuscula; //Concatena el mensake
      }
      else if (textToAscii >= 33 && textToAscii <= 64) { //condicion con los límites de caracteres especiales y numeros
        let asciiNumber = (textToAscii - 33 + parseInt(offset)) % 32 + 33; // formula cipher con caracteres especiales
        let asciiNumberNormal = String.fromCharCode(asciiNumber); //Pasar a letras normales
        msj += asciiNumberNormal; //Concatena el mensake 
      }
      /*else if (parseInt(offset)<0) {
        offset+=cipher.decode(text, offset);
    
      } //offset negativo */
 else {
        msj += text[index]; // si encuentra un caracter no definido en límites, dejar igualito.
      }
    }
    return msj; //retorna el mensaje
  },
  decode: (text, offset) => { // texto y desplazamiento
    let msj = ""; // declarar el nombre de la función para que guarde el texto, por el momento vacío.
    for (let index = 0; index < text.length; index++) { // Inicio del bucle que pasará por cada dato del texto.
      let textToAscii = text.charCodeAt(index); //obtener codigo ascii
      if (textToAscii >= 65 && textToAscii <= 90) { //condicion con los límites de mayúsculas
        let asciiMayuscula = (textToAscii + 65 - parseInt(offset)) % 26 + 65; // formula decipher
        let asciiLetterMayuscula = String.fromCharCode(asciiMayuscula); //Pasar a letras normales
        msj += asciiLetterMayuscula; //concateno el mensaje
      }
      else if (textToAscii >= 97 && textToAscii <= 122) { //condicion con los límites de minusculas
        let asciiMinuscula = (textToAscii - 122 - parseInt(offset)) % 26 + 122; // formula decode
        let asciiLetterMinuscula = String.fromCharCode(asciiMinuscula); //Pasar a letras normales
        msj += asciiLetterMinuscula; //concateno el mensaje
      }
      else if (textToAscii >= 33 && textToAscii <= 64) { //condicion con los límites de caracteres especiales y numeros
        let asciiNumber = (textToAscii - 64 - parseInt(offset)) % 32 + 64; // formula cipher
        let asciiNumberNormal = String.fromCharCode(asciiNumber); //Pasar a letras normales
        msj += asciiNumberNormal; //Concatena el mensake 
      }
      /*else if (parseInt(offset)<0) {
        offset+=cipher.encode(text, offset);
    
      } probar offset negativo*/ 
    else {
        msj += text[index]; // si encuentra un caracter no definido en límites, dejar igualito.
      }

    }
    return msj; // retorna el resultado
  }
}
