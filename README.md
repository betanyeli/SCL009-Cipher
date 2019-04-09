# **Introducción**

Durante el inicio del Bootcamp de Laboratoria, se nos planteó la creación de una aplicación que mediante el Cifrado César, codificara o decodificara un mensaje, en el cual nos pedían que pensáramos en qué situaciones de la vida real, esto fuera necesario.
Después de un proceso de investigación, planificación y feedback entre nuestras compañeras del bootcamp, egresadas, además de experiencias personales, elegí la temática de una aplicación de cifrado de información en un laboratorio clínico, adaptable a otras áreas de la salud. 
Definida la temática y después de realizar el flujo y prototipo de baja fidelidad de la página, se procede a planificar cada una de las tareas, las cuales se encuentran de forma detallada en ![Link a Trello](https://trello.com/b/SoNOO1j1/casanovalabs). Mientras se desarrollaban cada una de las tareas, iban saliendo más interrogantes y nuevas necesidades, por lo cual los códigos y aspecto de la aplicación iban en constante cambio, lo cual era lógico que ocurriría en ambientes de alta incertidumbre.

## **Casanova Labs.** :microscope:
Los avances en las ciencias médicas avanzan de forma vertiginosa ya que van de la mano con el auge de las nuevas tecnologías que día a día van desarrollándose conforme a las nuevas necesidades del usuario. Por este motivo es necesario ir adaptándose al ritmo de estos acontecimientos, ejemplo de esto, pudiera mencionarse como la simplificación de trámites en centros de salud, digitalización de documentos, entrega de informes, diagnósticos y resultados de forma remota, entre otros. Uno de los aspectos fundamentales de este avance, es el área de seguridad informática, ya que prevalece la protección de datos de usuarios y profesionales de la salud, de modo que no sea expuesta su privacidad. 

En este sentido, respondiendo a dichas necesidades, se planteó la creación de “Casanova Labs”, aplicación orientada al cifrado y posterior descifrado de información de carácter médico, tales como informes de diagnóstico, resultados, o cualquier tipo de dato generado en la relación médico-paciente, los cuales serían nuestros principales usuarios.  La aplicación se realizó con una interfaz básica de modo que facilite su uso, tomando en cuenta que los objetivos principales del usuario es la protección de sus datos.
Consideramos que “Casanova Labs” es un producto que tiene potencial, acorde al uso que le entreguen los usuarios, sus sugerencias serán tomadas en cuenta para seguir desarrollando esta aplicación.

## **A continuación, se explicará de forma detallada en qué consiste la aplicación.**

“Casanova Labs” es un aplicación orientada al cifrado y descifrado de información de carácter clínico que se genere entre profesionales y pacientes. El método de encriptado utilizado es el “Cifrado César”, el cual está basado en reasignar a cada letra del abecedario otra nueva resultante de desplazar éste un determinado número de lugares.
De esta manera, para encriptar o desencriptar un mensaje cualquiera, simplemente hay que cambiar los caracteres de uno por los del otro. Cuando se tiene un texto encriptado con un cifrado César y se conoce la clave de cifrado, desencriptarlo es bastante sencillo; sin embargo, cuando no se conoce dicha clave, se debe probar con los reordenamientos posibles hasta encontrar un mensaje con sentido. Dicho esto es muy necesario asignarle una clave de desplazamiento antes de cifrar el mensaje, y proporcionar dicha clave a quien queramos enviar el mensaje a cifrar o descifrar.

### **¿Cómo funciona?**
Veamos la interfaz principal de la página final.
 
![Casanova Labs](img/casanova.PNG)

Como se puede visualizar, la interfaz se realizó de forma amigable con el usuario, tomando en cuenta cada una de las consideraciones que nos expusieron en los test de usabilidad, quedando su funcionalidad de la siguiente forma.
•	Elegir un n° de desplazamientos.
•	Colocar el mensaje a cifrar / descifrar.
•	Cifrar / Descifrar.
•	El resultado quedaría listo para exportar, o limpiar según lo que requiera el usuario.

Se adjunta prototipo en figma de Casanova Labs, donde no se consideraban las instrucciones de uso de la página, lo cual dificultaba su utilidad.
 
![imagen](img/figma.png)

# **Test de usabilidad.**
Para la definición de la temática fue fundamental la opinión de profesionales de la salud en mi entorno, ya que muchas planteaban la necesidad de protección de los datos que manejaban. Mencionando algunos ejemplos:

-	Lcda. Daniuska Casanova:  Bioanalista (Tecnóloga Médica).  En principio se le presentó un prototipo de alta fidelidad que pudo compartir con sus colegas, en el cual se le dieron tareas, de las cuales indicó en un principio que sugería un botón de borrado y que las instrucciones fueran más claras en la página. Es importante mencionar que la aplicación se inspiró en sus labores, al manifestar que en su trabajo era muy importante salvaguardar la información, ya que son datos que pueden contener información delicada, que sólo deben manejarse entre el profesional y el paciente. 
![Test de usabilidad a Lcda Casanova](https://youtu.be/nD-yUJxmfdQ)
-	Juliana, estudiante de psicología: Se le presentó un prototipo en papel de la aplicación. Destacó la facilidad de uso de la página y su potencial de desarrollo en cuanto al cifrado de datos de su información.
-	Ana Gabriela, paciente. Se le presentó un prototipo de alta fidelidad, del cual concluyó que la interfaz era facil de usar, y también sugirió que se le colocaran instrucciones de uso en la página. Destacó la utilidad de la aplicación en la protección de su privacidad como paciente.
![Test de usabilidad a Ana Gabriela](https://www.youtube.com/watch?v=3GazZDNHXFk)
-	Usuario aleatorio. Se le presentó un prototipo de alta fidelidad, donde se le indicó la tarea de descifrar un mensaje. Destacó nuevamente la importancia de instrucciones, y que la aplicación sería de utilidad en el área de salud.
![Test usuario aleatorio](https://www.youtube.com/watch?v=Z7olUvNqMOQ)
