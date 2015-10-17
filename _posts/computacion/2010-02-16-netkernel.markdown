---
title: "REST en NetKernel"
date: 2010-02-16 08:16:10
categories: ideas computacion servicios rest
---
Entendiendo y estudiando cómo se implementa SOA en una empresa y específicamente las distintas alternativas que existen para publicar un servicio o un recurso, me he conseguido con un concepto que tiene algún tiempo, REST.

Resulta que a pesar de todos los intentos de reinvención y evolución de las TIC el problema fundamental de acoplamiento en las aplicaciones sigue siendo una preocupación primaria. La programación de aplicaciones que sean capaces de adaptarse a nuevos requerimientos, sin que esto implique rehacer toda la aplicación sigue siendo un reto.

Consultado los artículos de Brian Sletten en [JavaWorld](http://www.javaworld.com), hay una serie de 4 artículos dedicados a REST de los cuales el [tercero](http://www.javaworld.com/article/2077983/soa/scripting-jvm-languages-rest-for-java-developers-part-3-netkernel.html) se trata específicamente de la implementación de Servicios Web REST utilizando NetKernel.

NetKernel es un producto de [1060 Research](http://www.1060research.com), que es un spin-off de los laboratorios de Hewlett-Packard en el Reino Unido. 1060 Research se ha dedicado a desarrollar lo que ellos han denominado la Computación Orientada a Recurso (ROC - Resource Oriented Computing). Afortunadamente hay mucha [documentación](http://www.1060research.com/products/#roc) en el sitio web que bien vale la pena revisar.

Hay varias razones que me hacen pensar que este modelo tiene el potencial de convertirse en una referencia para la arquitectura de aplicaciones web, la construcción de nuevos frameworks de desarrollo, integración de aplicaciones, exposición de funcionalidades o servicios vía REST, etc.

Los atributos principales son:
- Servidor de Aplicación basado en Recursos. No requiere de otro Servidor de Aplicaciones o Frameworks de Desarrollo tipo Spring.
- El Servidor de Aplicación tiene una Arquitectura de MicroKernel, Multithreaded que permite atender cada requerimiento aprovechando procesadores MultiCore. El arquitecto y el programador tiene algo menos en que pensar.
- Cada recurso es accesible a través de un Identificador Universal (URI) público o privado. El MicroKernel se encarga de resolver cada URI a la respectiva Representación de un Recurso. Un URI puede ser http://myempresa.com/cliente/Id. Un URI como el anterior podría servir para consultar los datos de un cliente utilizando su Identificación.
- Cada requerimiento de un Recurso es independiente (Stateless).
- Un Recurso puede tener varias Representaciones (XML, HTML, Email, Archivo, un Objeto, etc)
- La lógica de las aplicaciones se pueden programar en distintos lenguajes: Java, Beanshell, Groovy, Ruby, Python, JavaScript (cualquiera que corra en una JVM).
- Cuenta con un Motor de almacenamiento temporal (Cache)
- Cuenta con librerías para: HTTP, JMS, SOAP, LDAP, Email, RDBMS, Seguridad, etc.
- Es extensible.

Lo que más llama la atención es la experiencia del programador. Para los que conocen Unix, se crean los recursos y se colocan en un "pipeline" para producir el resultado deseado.

Imagine los conceptos de Unix llevados a la Web. El programador debe crear los Recursos, a estos se le asigna un URI y luego se compone la lógica como en un "pipeline". La primera parte requiere programación y la segunda configuración.

Después que se entienden los conceptos que desarrolla 1060 Research en NetKernel se descubre un nuevo paradigma de programación e integración de aplicaciones en el mundo de la Web. El prototipo es la aplicación.

Cuando la creación de una aplicación consiste en crear componentes independientes que se comunican a través de un MicroKernel que controla los recursos de nombres, de procesamiento, de ejecución y de conexión, parece que estamos más cerca de obtener aplicaciones desacopladas distribuidas en la Web. Esto es definitivamente otra cosa!!!.

