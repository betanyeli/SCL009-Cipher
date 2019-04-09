window.onload = () => {
 
  //----------------CIFRADO
  let btn_cipher = document.getElementById("ciph"); //declarar la variable del botón y llamarlo.
  btn_cipher.addEventListener("click", () => {  //Función del botón click
    let offsetCipher = document.getElementById("desplazamiento").value; //Declarar el valor del offset.
    let msj_cipher = document.getElementById("mssj").value; //Declarar var del texto del usuario.
    let result_cipher = window.cipher.encode(msj_cipher, offsetCipher); //variable GLOBAL con metodo de cifrado
    document.getElementById("result").innerHTML = 'Tu texto es:' + result_cipher; //resultado cifrado

  })
  // ------------------ DESCIFRADO. 
  let btn_decipher = document.getElementById("deciph"); //declarar la variable del botón y llamarlo.
  btn_decipher.addEventListener("click", () => { //Función del botón click
    let offsetCipher = document.getElementById("desplazamiento").value; //Declarar el valor del offset.
    let msj_cipher = document.getElementById("mssj").value; //Declarar var del texto del usuario.
    let result_cipher = window.cipher.decode(msj_cipher, offsetCipher); //variable GLOBAL con metodo de descifrado
    document.getElementById("result").innerHTML = 'Tu texto es:' + result_cipher; //resultado descifrado

  })
}
let btn_borrar = document.getElementById("borrar"); // declarar función del botón y llamarlo.
btn_borrar.addEventListener("click", () => {
document.getElementById("desplazamiento").value= "";
document.getElementById("mssj").value= "";
document.getElementById("result").value= "";
})