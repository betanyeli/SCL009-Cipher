window.cipher = {
  encode: (text, offset) => { // texto y desplazamiento
    console.log(text, offset);
    let msj = " "; // declarar el name de la f pa k gaurde el sms
    for (let index = 0; index < text.length; index++) { // long de cadena, al princ es 0. index recorrido del for
      let textUpperCase = text.toUpperCase(index); // aca paso a mayuscula
      if (textUpperCase.charCodeAt(index) === 32) { // si la i encuentra un space sera true, y cuando vea un space imprima un .. space
        msj += " ";
      } else {
        let txt_to_ascii = (textUpperCase.charCodeAt(index) - 65 + parseInt(offset)) % 26 + 65; // PARA cifrar funcion michy
        msj += String.fromCharCode(txt_to_ascii); // para pasar cifrado a letrar.
      }


    }
    return msj;
  },
  decode: (text, offset) => {
    console.log(text, offset);
    let msj = " "; // declarar el name de la f pa k gaurde el sms
    for (let index = 0; index < text.length; index++) { // long de cadena, al princ es 0. index recorrido del for
      let textUpperCase = text.toUpperCase(index); // aca paso a mayuscula
      if (textUpperCase.charCodeAt(index) === 32) { // si la i encuentra un space sera true, y cuando vea un space imprima un .. space
        msj += " ";
      } else {
        let txt_to_ascii = (textUpperCase.charCodeAt(index) - 65 - parseInt(offset)) % 26 + 65; // descifrar, funcion de michy
        msj += String.fromCharCode(txt_to_ascii); //pa pasar descifrado a letras q conocemos
      }


    }
    return msj;
  }
}