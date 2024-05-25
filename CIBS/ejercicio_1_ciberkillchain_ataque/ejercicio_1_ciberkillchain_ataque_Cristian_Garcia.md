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
  
  - Identifico ip de la API y vulnerabilidades del sistema con el escaneo activo de la aplicacion utilizando las subtecnicas "Bloqueos IP de escaneo"(https://attack.mitre.org/techniques/T1595/001/) y "Escaneo de vulnerabilidad"(https://attack.mitre.org/techniques/T1595/002/) correspondientemente.

  - Reuno informacion sobre las victimas utilizando la subtecnica "Direcciones de correo electrónico"(https://attack.mitre.org/techniques/T1589/002/).
       
* Armamento
  
  - Preparo un malware para tener comunicacion abierta entre la pagina web y mi equipo. Por otro lado preparo una imagen para mantener la persistencia en la infraestructura cloud aplicando la subtecnica "Malware" (https://attack.mitre.org/techniques/T1588/001/) en ambos casos.
  
* Envio
  - Envío el malware para tomar el control de la pagina web mediante phishing con un archivo adjunto utilizando la subtecnica "archivo adjunto de phishing"(https://attack.mitre.org/techniques/T1566/001/).
  
* Explotacion
  
  - Logro tomar control de la pagina web de manera remota aprovechando la ejecucion del usuario del archivo adjunto con el malware utilizando la subtecnica "archivo malicioso"(https://attack.mitre.org/techniques/T1204/002/).
  
* Instalacion
   
  - Instalo una imagen interna en la infraestructura cloud para mantener la persistencia en el equipo utilizando la tecnica "Implante de imagen interna" (https://attack.mitre.org/techniques/T1525/).
    

* Commando y control (C2)
  
  - Deterioro las defensas del equipo utilizando las subtecnicas "deshabilitar o modificar el firewall en la nube"(https://attack.mitre.org/techniques/T1562/007/) y "modificar las configuraciones de Cloud Compute"(https://attack.mitre.org/techniques/T1578/005/) para poder conectarme a la base de datos directamente.

  - Creo un canal de comunicacion seguro para exfiltar los datos mediante la subtecnica "criptografía simétrica"(https://attack.mitre.org/techniques/T1573/001/).

  
* Accciones en los objetivos
  
  - Exfiltro los datos de usuarios para obtener los mails para notificar los excesos de consumo mediante la tecnica "Exfiltración sobre el canal C2"(https://attack.mitre.org/techniques/T1041/).
    
  - Modifico los consumos para que los usuarios visualicen un consumo excesivo en un determinado periodo de tiempo y envio de alartes de consumo mediante manipulacion de la base de datos utilizando la subtecnica "manipulación de datos almacenados"(https://attack.mitre.org/techniques/T1565/001/).

  - Envio mails falsos a los usuarios para el pago de los consumos con ofertas sugerentes a una cuenta bancaria falsa mediante la tecnica "Robo financiero" https://attack.mitre.org/techniques/T1657/.

  

