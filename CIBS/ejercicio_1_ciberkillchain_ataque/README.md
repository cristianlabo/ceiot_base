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

* Reconnaissance
  - Identificar ip publica del sistema .
  - Identificar vulnerabilidades del sistema.

* Weaponization
  - **Puedo** preparar un acceso a la pagina web aprovechando una vulnerabilidad 0-day.
  - Preparar un backdoor para tener comunicarcion abierta entre la pagina web y el equipo.
  
  
* Delivery
  - Envío el backdoor para tomar el control de la pagina web mediante phising.
  
* Exploit
  - Logro tomar control de la pagina web de manera remota aprovechando la vulnerabilidad 0-day.
  
* Installation  
  - Se instalan los programas necesarios para tener una comunicacion abierta entre la pagina web y mi equipo.

* Command & Control
  - Obtengo las credenciales e informacion de los usuarios.
  
* Actions on Objectives
  - Modifico los consumos de los usuarios para que visualicen un consumo excesivo en un determinado periodo de tiempo.
  - Envio alartes de consumo para que el usuario este informado.
  - Envio mails falsos a los usuarios para el pago del exceso de cosnumo en una cuenta falsa.


### Instrucciones

Debe haber un objetivo para el ataque, algunas ideas inspiradoras:

* Obtener información con algún tipo de valor.
* Alguna variante extorsiva de ransomware.
* Usar de plataforma para atacar a otros, ya sea por ancho de banda, anonimización o como desplazamiento lateral hacia un objetivo más interesante.
* Usar la plataforma para extraerle valor como criptominado o almacenamiento de información ilegal.
* Sabotear la plataforma a favor de la competencia, tipo stuxnet.

El escenario debe asumir el sistema ya funcionando en el futuro.

Debe ser en primera persona, es el punto de vista del atacante.

Es recomendable hacer dos o tres pasadas, en la primera la idea, en las siguientes refinamientos especificando las técnicas.
PURO ATAQUE, nada de andar pensando cómo corregir nada.

Para cada etapa, si hay varias medidas posibles, ordenar dejando para lo último lo que se va a hacer en el siguiente paso.

### Ejemplo adaptado a un juego de guerra inventado

Objetivo del ataque: inhabilitar sin destruir el puerto enemigo con vistas a posteriormente tomarlo.

* Reconnaissance
  - Imagen satelital identifica una pista de aterrizaje.
  - Espías dicen que por el puerto entra el combustible.
  - Espías locales dicen que la playa cercana no tiene buena vigilancia.

* Weaponization
  - **Puedo** preparar un bombardeo.
  - **Decido** preparar un equipo de comandos de sabotage.
  
* Delivery
  - Envío al equipo de sabotage a la playa cercana en submarino.
  
* Exploit
  - El equipo logra desembarcar sin incidentes en la playa.
  
* Installation  
  - El equipo se hace pasar por una compañia de circo como camuflaje.

* Command & Control
  - **Puedo** utilizar palomas mensajeras.
  - **Decido** utilizar Super High TeraHertz Radio que el adversario no puede detectar.
  
* Actions on Objectives
  - El equipo de comandos provoca daños menores en las cañerías.
  - El equipo de comandos coloca minas en el puerto dejando un camino para el desembarco.
  
### Ejemplo stuxnet

Deducido a partir de https://attack.mitre.org/software/S0603/

Objetivo del ataque: dañar las centrifugadoras de uranio

* Reconnaissance
  - TBD
  - TBD
  - TBD

* Weaponization
  - Se arma una pieza de malware utilizando zero days, información del fabricante de los sistemas SCADA y PLC
  
* Delivery
  - T1091 	Replication Through Removable Media https://attack.mitre.org/techniques/T1091
* Exploit
  - T1091 	Replication Through Removable Media https://attack.mitre.org/techniques/T1091
  
* Installation  
  - TBD

* Command & Control
  - TBD
  
* Actions on Objectives

  - T0831 	Manipulation of Control https://attack.mitre.org/techniques/T0831


  

