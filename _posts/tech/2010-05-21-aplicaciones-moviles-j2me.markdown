---
title: Aplicaciones Móviles - ¿J2ME o no?
date: 2010-05-21 08:00:00 Z
categories:
- tecnología
- movilidad
comments: true
---

La aplicaciones móviles son posibles de diversas maneras:

- Aplicación nativa para una familia de dispositivos (Blackberry, iPhone, Android, Windows Mobile
- Aplicación Web móvil (xhtml o WAP) accesible desde un browser de un dispositivo móvil
- Aplicación vía SMS
- Aplicación vía STK

Hay dos formas de programar una aplicación móvil nativa para Blackberry:

- Aplicación que utiliza J2ME (CLDC/MIDP)
- Aplicación que implementa las interfaces específicas de los dispositivos Blackberry

Al estudiar las posibilidades me pareció razonable la promesa de J2ME, que consiste en desarrollar una aplicación que cumple con el estándar y "debería" funcionar en todos los dispositivos que implementan el J2ME, en particular CLDC y MIDP. Esto ya debe bastar para captar la mayor audiencia posible.

Resulta que las aplicaciones J2ME funcionan bien en una variedad de dispositivos, sin embargo su capacidad para adaptarse y compenetrarse con el paradigma específico de cada familia de teléfonos inteligentes es muy baja.

Existen iniciativas como LWUIT, que consiste en una librería de componentes de interfaz implementada sobre J2ME. Se trata de que la interfaz, al menos, sea homogénea en una diversidad de dispositivos y lo logran con éxito. Sin embargo, los componentes de interfaz no se asemejan a los nativos y eso trae como consecuencia que la aplicación se separa del ambiente en el que se está ejecutando.

La interacción con la aplicación y el manejo de eventos no es igual a las aplicaciones nativas, por lo que se comporta de una manera no deseada o inconsistente con el estándar del teléfono.

En el caso de Blackberry específicamente, mi recomendación es que desarrollen una aplicación nativa para Blackberry y aprovechen al máximo las librerías provistas por RIM. En lugar de desarrollar con J2ME.

Por otra parte la realidad de J2ME es que cada marca importante de celulares como: Samsung, Motorola, Sony-Ericsson, etc, implementa extensiones a J2ME que la hacen particular para cada marca e inclusive para familias de teléfonos distintos dentro del mismo proveedor.

En el caso de Venezuela, cualquiera que desee desarrollar una aplicación nativa para teléfonos inteligentes, la decisión natural es iniciar por Blackberry. Resulta que Venezuela es el país con más Blackberrys per capita.

Luego hay que estudiar muy bien si hay suficientes usuarios de otras marcas con sistemas similares, para que el esfuerzo de desarrollo para otros modelos tenga mérito.

En un año o dos la promesa es que Android comience a tener relevancia en la región, así como ya la viene mostrando en Estados Unidos. Motorola está realizando una apuesta muy fuerte a la línea de teléfonos con Android, lo cual ya es una buena señal, así como proveedores Chinos como Huawei que ya lanzaron el primer Android a través de Orinoquia.