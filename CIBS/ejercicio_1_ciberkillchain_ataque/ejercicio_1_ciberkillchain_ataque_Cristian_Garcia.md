# Ejercicio CiberKillChain - Ataque

 * Cristian Garcia
 * Medidor de potencia electrica. Se trata de una red de sensores que miden potencia electrica,transmiten los datos por wifi a un broker mqtt a la nube.
 En la nube se alojan el backend y frontend de la aplicacion web que utilizan los usuarios.
 Desde la aplicacion se pueden setear alarmas de consumo, monitorear la potencia consumida y visualizar los horarios de cortes de suministro electrico.
 https://github.com/cristianlabo/Plantilla-planificacion/blob/master/charter.pdf 
 * Los usuarios estan expuestos a la modificacion de consumos electricos, envio de alertas falsas y cobro de pagos falsos por los atacantes.



## Enunciado

Armar una cyberkillchain usando técnicas de la matriz de Att&ck para un escenario relacionado al trabajo práctico de la carrera.

### Ataque: estafa por exceso de consumo electrico

Objetivo del ataque: Estafar a los usuarios por medio de cobros falsos por excesos de consumo electrico.

* Reconocimiento
  
  - Identificar ip de la API, vulnerabilidades del sistema mediante el escaneo activo. https://attack.mitre.org/techniques/T1595/
     - Utilizando las siguientes subtecnicas: Bloqueos IP de escaneo(https://attack.mitre.org/techniques/T1595/001/), Escaneo de vulnerabilidad(https://attack.mitre.org/techniques/T1595/002/)

  - Reunir informacion sobre las victimas. https://attack.mitre.org/techniques/T1589/
     - Utilizando las siguientes subtecnicas: Credenciales(https://attack.mitre.org/techniques/T1589/001/), Direcciones de correo electrónico(https://attack.mitre.org/techniques/T1589/002/)

  - Utilizar phising para obtener informacion personal. https://attack.mitre.org/techniques/T1598/
     - Utilizando las siguientes subtecnicas: Servicio de Spearphishing(https://attack.mitre.org/techniques/T1598/001/).
       
* Armamento
  
  - Obtener cuentas comprometidas. https://attack.mitre.org/techniques/T1586/
    - Utilizando las siguientes subtecnicas: Cuentas de correo electrónico(https://attack.mitre.org/techniques/T1586/002/).

  - Preparar un backdoor para tener comunicacion abierta entre la pagina web y mi equipo. https://attack.mitre.org/techniques/T1588/
    - Utilizando las siguientes subtecnicas: Malware (https://attack.mitre.org/techniques/T1588/001/).
  
* Envio
  - Envío el backdoor para tomar el control de la pagina web mediante phishing con un archivo adjunto.https://attack.mitre.org/techniques/T1566/
    - Utilizando las siguientes subtecnicas: archivo adjunto de phishing(https://attack.mitre.org/techniques/T1566/001/).
  
* Explotacion
  
  - Logro tomar control de la pagina web de manera remota aprovechando la ejecucion de usuario. https://attack.mitre.org/techniques/T1204/
    - Utilizando las siguientes subtecnicas: archivo malicioso(https://attack.mitre.org/techniques/T1204/002/).
  
* Instalacion
   
  - Se instala una imagen interna en la infraestructura cloud. https://attack.mitre.org/techniques/T1525/

  - Creacion de cuentas falsa para mantener el acceso al sistema y sus recursos.https://attack.mitre.org/techniques/T1136/
    - Utilizando las siguientes subtecnicas: cuenta en la nube(https://attack.mitre.org/techniques/T1136/003/).
    

* Commando y control (C2)
  
  - Escalada de privilegios mediante manipulacion de cuentas. https://attack.mitre.org/techniques/T1098/
    - Utilizando las siguientes subtecnicas: credenciales de nube adicionales(https://attack.mitre.org/techniques/T1098/001/).
    
  - Evasion de defensas mediante el deterioro de las defensas https://attack.mitre.org/techniques/T1562/  y la modificacion de infrastructura en la nube https://attack.mitre.org/techniques/T1578/.
    - Utilizando las siguientes subtecnicas: deshabilitar o modificar el firewall en la nube(https://attack.mitre.org/techniques/T1562/007/) y modificar las configuraciones de Cloud Compute(https://attack.mitre.org/techniques/T1578/005/)

  - Acceso a credenciales mediante Credenciales de almacenes de contraseñas. https://attack.mitre.org/techniques/T1555/
    - Utilizando las siguientes subtecnicas: almacenes de gestión de secretos en la nube(https://attack.mitre.org/techniques/T1555/006/).

  - Descubrimiento de recursos en la nube mediante Descubrimiento de cuenta https://attack.mitre.org/techniques/T1087/, Descubrimiento de servicios en la nube https://attack.mitre.org/techniques/T1526/ y Descubrimiento de objetos de almacenamiento en la nube https://attack.mitre.org/techniques/T1619/.
    - Utilizando las siguientes subtecnicas: cuenta en la nube(https://attack.mitre.org/techniques/T1087/001/).

  - Movimiento lateral mediante Servicios remotos. https://attack.mitre.org/techniques/T1021/
    - Utilizando las siguientes subtecnicas: servicios en la nube(https://attack.mitre.org/techniques/T1021/007/).

  - Recompilacion mediante Colección de correo electrónico. https://attack.mitre.org/techniques/T1114/
    - Utilizando las siguientes subtecnicas: regla de reenvío de correo electrónico(https://attack.mitre.org/techniques/T1114/003/).

  - comando y control mediante un canal cifrado. https://attack.mitre.org/techniques/T1573/
    - Utilizando las siguientes subtecnicas: criptografía simétrica(https://attack.mitre.org/techniques/T1573/001/).

  
* Accciones en los objetivos
  
  - Exfiltracion de datos de usuarios mediante Exfiltración sobre el canal C2. https://attack.mitre.org/techniques/T1041/
    
  - Modifico los consumos para que los usuarios visualicen un consumo excesivo en un determinado periodo de tiempo y envio de alartes de consumo pmediante manipulacion de datos. https://attack.mitre.org/techniques/T1565/
    - Utilizando las siguientes subtecnicas: manipulación de datos almacenados(https://attack.mitre.org/techniques/T1565/001/).

  - Envio mails falsos a los usuarios para pago de los consumos en una cuenta bancaria falsa mediante Robo financiero https://attack.mitre.org/techniques/T1657/

  

