# Ejercicio CiberKillChain - Defensa

## Alumno

Cristian Garcia

## Enunciado

Desarrollar la defensa en función del ataque planteado en orden inverso. No es una respuesta a un incidente, hay que detectar el ataque independientemente de la etapa.

Para cada etapa elegir una sola defensa, la más importante, considerar recursos limitados.

## Resolución

### Defensa: estafa por exceso de consumo electrico

Objetivo de la defensa : Mitigar el riesgo de estafas a los usuarios por medio de cobros falsos por excesos de consumo electrico.

* Accciones en los objetivos
  
  - __Ataque__: Envio mails falsos a los usuarios sustituyendo la identidad de la empresa proveedora para el pago de los consumos en una cuenta bancaria falsa.  
    __Defensa__: Capacitar a los usuarios para reducir el riesgo de estos ataques por medio de phising(https://attack.mitre.org/mitigations/M1017/).
  - __Ataque__: Modifico los consumos para que los usuarios visualicen un consumo excesivo en un periodo de tiempo y envio alertas de consumo, mediante manipulacion de la base de datos.
    __Ataque__: Exfiltro los datos de usuarios para notificar los excesos de consumo. 
    __Defensa__: Se cifran los datos relevantes en la base de datos (https://attack.mitre.org/mitigations/M1041/).
    
* Commando y control (C2)
  
  - __Ataque__: Deterioro las defensas del equipo utilizando las subtecnicas "deshabilitar o modificar el firewall en la nube" y "modificar las configuraciones de Cloud Compute" para poder conectarme a la base de datos directamente. 
    __Defensa__: Se gestionan las cuentas de usuarios en la nube segun el principio de minimo provilegio(https://attack.mitre.org/mitigations/M1018/).

  - __Ataque__: Creo un canal de comunicacion seguro para exfiltar los datos mediante la subtecnica "criptografía simétrica"). 
    __Defensa__: Se instala un IPS( Sistema de prevención de intrusiones) en la red para detectar y prevenir actividades maliciosas (https://attack.mitre.org/mitigations/M1031/).

* Instalacion
   
  - __Ataque__: Instalo una imagen interna en la infraestructura cloud para mantener la persistencia en el equipo.
    __Defensa__: Verificar periódicamente la integridad de las imágenes y los contenedores utilizados en las implementaciones en la nube para asegurarse de que no hayan sido modificados para incluir software malicioso.(https://attack.mitre.org/mitigations/M1047/).

* Explotacion
  
  - __Ataque__: Logro tomar control de la pagina web de manera remota, aprovechando la ejecucion del archivo adjunto con el malware por parte del usuario. 
    __Defensa__: Impedir la ejecución de ejecutables disfrazados de otros archivos mediante el control de aplicaciones.(https://attack.mitre.org/mitigations/M1038/).

* Envio
  - __Ataque__: Envío el malware para tomar el control de la pagina web mediante phishing con un archivo adjunto(malware). 
    __Defensa__: Bloquear de forma predeterminada los archivos adjuntos desconocidos en los servidores de correos(https://attack.mitre.org/mitigations/M1021/).

* Armamento
  
  - __Ataque__: Preparo un malware para tener comunicacion abierta entre la pagina web y mi equipo. Por otro lado preparo una imagen personalizada para mantener la persistencia en la infraestructura cloud. 
    __Defensa__: Configurando procesos de hardening en los servicios de la nube minimizando el riesgo de ataque (https://attack.mitre.org/mitigations/M1056/)
    
* Reconocimiento
  
  - __Ataque__: Identifico ip de la API y vulnerabilidades del sistema utilizando "escaneo activo de la aplicacion" con las subtecnicas "Bloqueos IP de escaneo" y "Escaneo de vulnerabilidad". 
    __Defensa__: Se exponen la menor cantidad de servicios a internet desde la instancia de la nube(https://attack.mitre.org/mitigations/M1056/)

  - __Ataque__: Reuno informacion sobre las victimas utilizando la subtecnica "Direcciones de correo electrónico". 
    __Defensa__: Configurando alertas en servidores de correo para mails que no pertenezcan a la empresa provedora (https://attack.mitre.org/mitigations/M1056/)
       

  

  


    


