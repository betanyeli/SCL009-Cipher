window.cipher = {
  encode: (text, offset) => { // texto y desplazamiento
    console.log(text, offset);
    let msj = " "; // declarar el nombre de la función para que guarde el texto, por el momento vacío.
    for (let index = 0; index < text.length; index++) { // Inicio del bucle que pasará por cada dato del texto.
      let textUpperCase = text.toUpperCase(index); // Pasar a mayúscula los datos ya iterados en el bucle anterior.
      if (textUpperCase.charCodeAt(index) === 32) { // si la iteración encuentra un space sera true y si es así, lo imprima.
        msj += " ";
      } else {
        let txt_to_ascii = (textUpperCase.charCodeAt(index) - 65 + parseInt(offset)) % 26 + 65; // Función Cipher
        msj += String.fromCharCode(txt_to_ascii); // Cifrado de ascii a letras.

      }


    }
    return msj;
  },
  decode: (text, offset) => {
    console.log(text, offset);
    let msj = " "; // declarar el nombre de la función para que guarde el texto, por el momento vacío.
    for (let index = 0; index < text.length; index++) {// Inicio del bucle que pasará por cada dato del texto.
      let textUpperCase = text.toUpperCase(index); // Pasar a mayúsculas los datos iterados del bucle anterior.
      if (textUpperCase.charCodeAt(index) === 32) { // si la iteración encuentra un space sera true y si es así, lo imprima.
        msj += " ";
      } else {
        let txt_to_ascii = (textUpperCase.charCodeAt(index) + 65 - parseInt(offset)) % 26 + 65; // Función cipher pero descifrando. cambie -- a +-
        msj += String.fromCharCode(txt_to_ascii); // Cifrado de ascii a letras
      }


    }
    return msj;
  }
}