window.onload = () => {
  // debugger;
    let btn_cipher = document.getElementById("ciPher"); //declarar la var del btn
    btn_cipher.addEventListener("click", () => {  //el btn
      let offsetCipher = document.getElementById("offSet").value; //num desplazamiento y declarar su value
      let msj_cipher = document.getElementById("mssj").value; //msj a cifrar
      let result_cipher = window.cipher.encode(msj_cipher, offsetCipher); //variable GLOBAL con metodo de cifrado
      document.getElementById("result").innerHTML = 'Tu texto es:' + result_cipher; //resultado cifrado
  
    })
  // ------------------ DESCIFRADO. 
    let btn_decipher = document.getElementById("deciPher"); //declarar la var del btn
    btn_decipher.addEventListener("click", () => { //el btn
      let offsetCipher = document.getElementById("offSet").value; //num desplazamiento y declarar su value
      let msj_cipher = document.getElementById("mssj").value; //msj a descifrar
      let result_cipher = window.cipher.decode(msj_cipher, offsetCipher); //variable GLOBAL con metodo de cifrado
      document.getElementById("result").innerHTML ='Tu texto es:' + result_cipher; //resultado descifrado
  
    })
  
  }