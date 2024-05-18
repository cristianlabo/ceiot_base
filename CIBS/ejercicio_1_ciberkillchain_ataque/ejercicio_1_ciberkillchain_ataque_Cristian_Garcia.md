# Ejercicio CiberKillChain - Ataque

Crear un nuevo documento en esta carpeta con las siguientes secciones:

 * Cristian Garcia
 * Medidor de potencia electrica. Se trata de una red de sensores que miden potencia electrica,transmiten los datos por wifi a un broker mqtt a la nube.
 En la nube se alojan el backend y frontend de la aplicacion web que se conectan los usuarios.
 Desde la aplicacion se pueden setear alarmas de consumo, monitorear la potencia consumida y visualizar los horarios de cortes de suministro electrico.
 https://github.com/cristianlabo/Plantilla-planificacion/blob/master/charter.pdf 
 * Los usuarios estan expuestos a la modificacion de consumos electricos, envio de alertas falsas y cobro de pagos falsos por los atacantes.



## Enunciado

Armar una cyberkillchain usando técnicas de la matriz de Att&ck para un escenario relacionado al trabajo práctico de la carrera.



### Ataque: estafa por exceso de consumo electrico

Objetivo del ataque: Estafar a los usuarios por medio de cobros falsos por excesos de consumo electrico.

* Reconocimiento
  - Identificar ip de la API, vulnerabilidad del sistema mediante el escaneo activo. https://attack.mitre.org/techniques/T1595/
  - Reunir informacion sobre las victimas. https://attack.mitre.org/techniques/T1589/
  - Utilizar phising para obtener informacion personal. https://attack.mitre.org/techniques/T1598/

* Armamento
  - Obtener cuentas comprometidas. https://attack.mitre.org/techniques/T1586/
  - Preparar un backdoor para tener comunicarcion abierta entre la pagina web y el equipo.https://attack.mitre.org/techniques/T1588/ 
  
* Envio
  - Envío el backdoor para tomar el control de la pagina web mediante phishing.https://attack.mitre.org/techniques/T1566/
  
* Explotacion
  - Logro tomar control de la pagina web de manera remota aprovechando la ejecucion de usuario. https://attack.mitre.org/techniques/T1204/
  
* Instalacion  
  - Se instala una imagen interna en la infraestructura. https://attack.mitre.org/techniques/T1525/
  - Creacion de cuentas falsa para mantener el acceso al sistema y sus recursos.https://attack.mitre.org/techniques/T1136/

* Commando y control (C2)
  - Escalada de privilegios mediante manipulacion de cuentas. https://attack.mitre.org/techniques/T1098/
  - Evasion de defensas mediante el deterioro de las defensas https://attack.mitre.org/techniques/T1562/  y la modificacion de infrastructura en la nube https://attack.mitre.org/techniques/T1578/.
  - Acceso a credenciales mediante Credenciales de almacenes de contraseñas. https://attack.mitre.org/techniques/T1555/
  - Descubrimiento de recursos en la nube mediante Descubrimiento de cuenta https://attack.mitre.org/techniques/T1087/ , Descubrimiento de la ventana de la aplicación https://attack.mitre.org/techniques/T1010/ , Descubrimiento de servicios en la nube https://attack.mitre.org/techniques/T1526/ y Descubrimiento de objetos de almacenamiento en la nube https://attack.mitre.org/techniques/T1619/.
  - Movimiento lateral mediante Servicios remotos. https://attack.mitre.org/techniques/T1021/
  - Recompilacion mediante Colección de correo electrónico. https://attack.mitre.org/techniques/T1114/
  - comando y control mediante un canal cifrado. https://attack.mitre.org/techniques/T1573/

  
* Accciones en los objetivos
  - Exfiltracion de datos de usuarios mediante Exfiltración sobre el canal C2. https://attack.mitre.org/techniques/T1041/ 
  - Modifico los consumos para que los usuarios visualicen un consumo excesivo en un determinado periodo de tiempo mediante manipulacion de dato. https://attack.mitre.org/techniques/T1565/
  - Envio alartes de consumo para que el usuario este informado. https://attack.mitre.org/techniques/T1565/
  - Envio mails falsos a los usuarios para el pago del exceso de cosnumo en una cuenta bancaria falsa con los datos obtenidos de la exfiltracion.


  

