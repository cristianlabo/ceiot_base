# Ejercicio CiberKillChain - Defensa

## Alumno

Cristian Garcia

## Enunciado

Desarrollar la defensa en función del ataque planteado en orden inverso. No es una respuesta a un incidente, hay que detectar el ataque independientemente de la etapa.

Para cada etapa elegir una sola defensa, la más importante, considerar recursos limitados.

## Resolución

### Defensa: estafa por exceso de consumo electrico

Objetivo de la defensa : Impedir o mitigar el riesgo de estafas a los usuarios por medio de cobros falsos por excesos de consumo electrico.

* Accciones en los objetivos
  
  - Exfiltro los datos de usuarios para obtener los mails para notificar los excesos de consumo mediante la tecnica "Exfiltración sobre el canal C2"(https://attack.mitre.org/techniques/T1041/).
    
  - Modifico los consumos para que los usuarios visualicen un consumo excesivo en un periodo de tiempo y envio alertas de consumo, mediante manipulacion de la base de datos, utilizando la subtecnica "manipulación de datos almacenados"(https://attack.mitre.org/techniques/T1565/001/).

  - Envio mails falsos a los usuarios sustituyendo la identidad de la empresas proveedora para el pago de los consumos, con ofertas sugerentes a una cuenta bancaria falsa, mediante la tecnica "Robo financiero" https://attack.mitre.org/techniques/T1657/.

* Commando y control (C2)
  
  - Deterioro las defensas del equipo utilizando las subtecnicas "deshabilitar o modificar el firewall en la nube"(https://attack.mitre.org/techniques/T1562/007/) y "modificar las configuraciones de Cloud Compute"(https://attack.mitre.org/techniques/T1578/005/) para poder conectarme a la base de datos directamente.

  - Creo un canal de comunicacion seguro para exfiltar los datos mediante la subtecnica "criptografía simétrica"(https://attack.mitre.org/techniques/T1573/001/).

* Instalacion
   
  - Instalo una imagen interna en la infraestructura cloud para mantener la persistencia en el equipo utilizando la tecnica "Implante de imagen interna" (https://attack.mitre.org/techniques/T1525/).

* Explotacion
  
  - Logro tomar control de la pagina web de manera remota, aprovechando la ejecucion del archivo adjunto con el malware por parte del usuario, utilizando la subtecnica "archivo malicioso"(https://attack.mitre.org/techniques/T1204/002/).

* Envio
  - Envío el malware para tomar el control de la pagina web mediante phishing con un archivo adjunto(malware) utilizando la subtecnica "archivo adjunto de phishing"(https://attack.mitre.org/techniques/T1566/001/).

* Armamento
  
  - Preparo un malware para tener comunicacion abierta entre la pagina web y mi equipo. Por otro lado preparo una imagen personalizada para mantener la persistencia en la infraestructura cloud. En ambos casos aplico la subtecnica "Malware" (https://attack.mitre.org/techniques/T1588/001/).
  - 
* Reconocimiento
  
  - Identifico ip de la API y vulnerabilidades del sistema utilizando "escaneo activo de la aplicacion" con las subtecnicas "Bloqueos IP de escaneo"(https://attack.mitre.org/techniques/T1595/001/) y "Escaneo de vulnerabilidad"(https://attack.mitre.org/techniques/T1595/002/) correspondientemente.

  - Reuno informacion sobre las victimas utilizando la subtecnica "Direcciones de correo electrónico"(https://attack.mitre.org/techniques/T1589/002/).
       

  

  


    


