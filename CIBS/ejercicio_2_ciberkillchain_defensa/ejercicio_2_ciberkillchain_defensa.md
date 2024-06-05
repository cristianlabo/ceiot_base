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
  
  - Envio mails falsos a los usuarios sustituyendo la identidad de la empresas proveedora para el pago de los consumos, con ofertas sugerentes a una cuenta bancaria falsa.Se puede mitigar el riesgo capacitando a los usuarios para reducir el riesgo de estos ataques por medio de phising(https://attack.mitre.org/mitigations/M1017/).
  - Modifico los consumos para que los usuarios visualicen un consumo excesivo en un periodo de tiempo y envio alertas de consumo, mediante manipulacion de la base de datos.Se puede mitigar el riesgo cifrando los datos relevantes de la aplicacion en la base de datos(https://attack.mitre.org/mitigations/M1041/). 
  - Exfiltro los datos de usuarios para obtener los mails para notificar los excesos de consumo. Se puede mitigar el riesgo cifrando los datos relevantes de la aplicacion en la base de datos(https://attack.mitre.org/mitigations/M1041/).

* Commando y control (C2)
  
  - Deterioro las defensas del equipo utilizando las subtecnicas "deshabilitar o modificar el firewall en la nube" y "modificar las configuraciones de Cloud Compute" para poder conectarme a la base de datos directamente. Se puede mitigar el riesgo gestionando las cuentas de usuarios en la nube segun el principio de minimo provilegio(https://attack.mitre.org/mitigations/M1018/).

  - Creo un canal de comunicacion seguro para exfiltar los datos mediante la subtecnica "criptografía simétrica"). Se puede mitigar por medio de IDS(Sistema de detección de intrusiones) e IPS(istema de prevención de intrusiones) en la red (https://attack.mitre.org/mitigations/M1031/).

* Instalacion
   
  - Instalo una imagen interna en la infraestructura cloud para mantener la persistencia en el equipo. Se puede mitigar el riesgo de este ataque gestionando los privilegios de las cuentas de usuario en la nube según el principio de mínimo privilegio (https://attack.mitre.org/mitigations/M1026/).

* Explotacion
  
  - Logro tomar control de la pagina web de manera remota, aprovechando la ejecucion del archivo adjunto con el malware por parte del usuario. Se puede mitigar el riesgo mediante el control de aplicaciones que pueden impedir la ejecución de ejecutables disfrazados de otros archivos.(https://attack.mitre.org/mitigations/M1038/).

* Envio
  - Envío el malware para tomar el control de la pagina web mediante phishing con un archivo adjunto(malware). Se puede mitigar bloqueando de forma predeterminada los archivos adjuntos desconocidos en los servidores de correos(https://attack.mitre.org/mitigations/M1021/).

* Armamento
  
  - Preparo un malware para tener comunicacion abierta entre la pagina web y mi equipo. Por otro lado preparo una imagen personalizada para mantener la persistencia en la infraestructura cloud. En ambos casos no se puede mitigar dado que no dependen de la defensa. El software o recurso a conseguir depende del atacante.
    
* Reconocimiento
  
  - Identifico ip de la API y vulnerabilidades del sistema utilizando "escaneo activo de la aplicacion" con las subtecnicas "Bloqueos IP de escaneo" y "Escaneo de vulnerabilidad". Se puede mitigar el riesgo centrandose en minimizar la cantidad y la sensibilidad de los datos disponibles de las aplicaciones para las partes externas. (https://attack.mitre.org/mitigations/M1056/)

  - Reuno informacion sobre las victimas utilizando la subtecnica "Direcciones de correo electrónico". Se puede mitigar centrandose en minimizar la cantidad y la sensibilidad de los datos disponibles de los usuarios para las partes externas. (https://attack.mitre.org/mitigations/M1056/)
       

  

  


    


