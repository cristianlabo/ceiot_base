# Ejercicio CiberKillChain - Ataque

Crear un nuevo documento en esta carpeta con las siguientes secciones:

 * Cristian Garcia
 * Medidor de potencia electrica. Se trata de una red de sensores que miden potencia electrica,transmiten los datos por wifi a un broker mqtt a la nube.
 En la nube se alojan el backend y frontend de la aplicacion web que se conectan los usuarios.
 Desde la aplicacion se pueden setear alarmas de consumo, monitorear la potencia consumida y visualizar los horarios de cortes de suministro electrico.
 * Los usuarios estan expuestos a la modificacion de consumos electricos, envio de falsas alertas y cobro de pagos falsos por los atacantes.



## Enunciado

Armar una cyberkillchain usando técnicas de la matriz de Att&ck para un escenario relacionado al trabajo práctico de la carrera.



### Ataque: estafa por exceso de consumo electrico

Objetivo del ataque: Estafar a los usuarios por medio de cobros falsos por excesos de consumo electrico.

* Reconocimiento
  - Identificar ip de la API, vulnerabilidad del sistema mediante el escaneo activo. https://attack.mitre.org/techniques/T1595/
  - Reunir informacion sobre las victimas. https://attack.mitre.org/techniques/T1589/
  - Utilizar phising para obtener informacion personal. https://attack.mitre.org/techniques/T1598/

* Weaponization
  - **Puedo** preparar un acceso a la pagina web aprovechando una vulnerabilidad 0-day.
  - Preparar un backdoor para tener comunicarcion abierta entre la pagina web y el equipo.
  
* Delivery
  - Envío el backdoor para tomar el control de la pagina web mediante phishing.
  
* Exploit
  - Logro tomar control de la pagina web de manera remota aprovechando la vulnerabilidad 0-day.
  
* Installation  
  - Se instalan los programas necesarios para tener una comunicacion abierta entre la pagina web y mi equipo.

* Command & Control
  - Obtengo las credenciales e informacion de los usuarios.
  
* Actions on Objectives
  - Modifico los consumos para que los usuarios visualicen un consumo excesivo en un determinado periodo de tiempo.
  - Envio alartes de consumo para que el usuario este informado.
  - Envio mails falsos a los usuarios para el pago del exceso de cosnumo en una cuenta bancaria falsa.


  

