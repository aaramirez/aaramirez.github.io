---
title: "Diseño y construcción de interfases de usuario"
date: 2010-08-10 08:00:00
categories: diseño interfaces
comments: true
---

Quiero compartir algunas ideas sobre la construcción de interfaces de usuario.

Acabando de pasar por la experiencia de diseñar y programar aplicaciones móviles para un Banco. No es sencillo explicar por qué una decisión de diseño es óptima o subóptima, mucho menos si es conveniente objetivamente de cara al usuario final, si no se cuenta con su opinión.

Cuando utilizo la palabra "objetivo", me refiero a una forma de medir la conveniencia de la(s) decisión(es) de diseño. Ese argumento puede ser mejor al momento de discutir sobre la cantidad de pantallas o la enumeración de actividades que debe realizar el usuario para hacer una operación.

Los atributos que he considerado importantes son:

- Simplicidad
- Relevancia
- Intuitiva
- Flexible
- Social

Cada uno de estos atributos agrega valor a la experiencia final y en conjunto aumentan la probabilidad de que el usuario no se canse de usar la aplicación. Vamos a hablar un poco del primero.

## Simplicidad

Este atributo tiene que ver con la cantidad de actividades que debe realizar un usuario para alcanzar su objetivo, para ejecutar la operación que desea.

Desde mi punto de vista la simplicidad tiene que ver con que tan eficientemente el usuario puede realizar una o varias actividades, de naturaleza similar o diversa.

Objetivamente lo traduzco en las siguientes métricas:

- Eficiencia en clicks: Número de clicks por operación.
- Eficiencia en pantallas: Número de pantallas a navegar por operación
- Eficiencia en introducción de datos

Las dos primeras tienen variantes de sumo interés. La eficiencia se debe medir de varias maneras.

- De forma simple: Se mide contando los clicks y pantallas para realizar una operación
- De forma múltiple: Se mide contando los clicks y pantallas para realizar varias operaciones similares
- De forma mixta: Se mide contando los clicks y pantallas para realizar varias operaciones diferentes

En el caso de un Banco, se puede medir cuantos clicks debe realizar el usuario para ejecutar una transferencia (caso simple), dos transferencias (caso múltiple), una transferencia y un pago (caso mixto).

En el mejor de los casos se puede crear una experiencia similar al comercio electrónico donde se cuenta con un carrito de compras, se colocan todas las operaciones que se desean realizar y se ejecutan una sola vez. En el peor de los casos se debe pasar por el proceso de ejecución de una operación tres veces. De forma análoga con el número de pantallas. Tal vez en este ejemplo cabe un elemento que se debe considerar y es la seguridad. Estamos hablando de un Banco. Tiene que ser simple pero seguro.

He visto que algunos sitios colocan al usuario en la posición de pasar por los chequeos de seguridad por cada operación que desea ejecutar. Ese es el peor caso de experiencia de usuario. El mejor caso sería un sólo chequeo de seguridad y todas las operaciones que desees. Es decir, chequeo la seguridad y permito que se ejecuten tantas operaciones como ese nivel de seguridad lo permita. Es un concepto sencillo de seguridad multinivel. Si alcanzo un nivel de seguridad hago todo lo que desee dentro de un lapso de tiempo razonable.

Por último se debe evitar que el usuario introduzca los mismos datos más de una vez. La excepción a la regla son los datos de seguridad o autenticación del usuario. Por ejemplo: Aunque el Banco cuenta con todos los datos del usuario, si desea solicitar un instrumento adicional, este debe llenar una planilla a mano, con todos sus datos de nuevo. Lo peor del caso es que alguien debe realizar la tarea de transcribir esos datos, con el agravante de que se comenten errores en la transcripción. Definitivamente una interacción de esta naturaleza se enfoca más en proceso que en el usuario. Debe ser todo lo contrario. El proceso se debe enfocar en el usuario.

El resto para después... :)
