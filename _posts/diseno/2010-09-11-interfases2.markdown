---
title: "Diseño y construcción de interfases de usuario - 2"
date: 2010-09-11 08:00:00
categories: diseno interfases
---
Ya hablamos de la Simplicidad como uno de los atributos importantes a la hora de crear interfaces de usuario. Nos toca la Relevancia.

## Relevancia

Se refiere a que la información que se le presenta al usuario tiene importancia, es oportuna, cuando el usuario la observa o la recibe, le facilita una tarea o genera una acción por parte del mismo.

Hay dos aspectos que destacan para lograr la relevancia en la interfaz:

- La interfaz que se ajusta al comportamiento del usuario
- La aplicación produce notificaciones y alertas

En el caso de la primera, en pantalla debe aparecer de primero lo que el usuario más hace, más utiliza, más introduce, más consulta, la operación más frecuente, los datos más usados, la cuenta más utilizada, el destino más visitado, etc. Esto tiene una implicación importante que consiste en levantar información de los hábitos de uso de la aplicación.

Hay varias opciones:
- Interfaz que se ajusta a los hábitos de todos los usuarios por igual
- Interfaz que se ajusta a los hábitos de grupos de usuarios
- Interfaz que se ajusta a los hábitos de cada usuario

Las tres alternativas implican el almacenamiento de información. La diferencia es la cantidad de información que se almacena. En las tres alternativas descritas aumenta la cantidad de información mientras más específico somos al momento de clasificar los hábitos de uso.

También es válido una combinación de factores. Por ejemplo: si las operaciones del Banco son las mismas para todos, se puede presentar la operación más usada de primero. Por otra parte, como el destino o beneficiario de una transferencia es un atributo particular de cada usuario, entonces la lista de destinos o beneficiarios posibles es particular a cada usuario y se le presentan de primero los destinos más usados.

Por otra parte es importante entender el nivel de compromiso de seguridad que se alcanza con la información que se almacena.

El segundo aspecto consiste en generar notificaciones y alertas que generan acciones por parte del usuario. Hay aplicaciones que generan notificaciones muy frecuentes y las mismas son informativas y aunque generen interés al principio, si el usuario no hace nada, no se genera ninguna acción al recibirlas, entonces pierde la eficacia y el usuario las desecha, ya que no son relevantes.

Las eficiencia de las notificaciones se debe medir. La métrica en este caso es el número de operaciones por notificación que se producen.

Hay notificaciones informativas donde el número de operaciones por notificación es muy bajo. Este tipo de notificaciones debería ser configurable por el usuario y opcional.

Por otra parte hay notificaciones que son solicitudes generadas por terceros o programadas. El número de operaciones por notificación debería ser 1 a 1. Por cada notificación se genera una operación. Este tipo de notificaciones deben presentar una interfaz que facilite la ejecución de la operación.

Una interfaz relevante aumenta la eficiencia en la medida que el usuario utiliza la aplicación. Una interfaz relevante engancha al usuario y se convierte en una herramienta de trabajo. Este es un elemento de suma importancia para que se genere la lealtad de parte del usuario.
