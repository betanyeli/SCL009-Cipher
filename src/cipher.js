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
      else if (text.charCodeAt(index) === 32) { // si la iteración encuentra un space sera true y si es así, lo imprima.
        msj += " ";
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
    else if (text.charCodeAt(index) === 32) { // si la iteración encuentra un space sera true y si es así, lo imprima.
      msj += " ";
    }

  }
 return msj;
} }
