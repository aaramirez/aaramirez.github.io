---
title: ¿Cómo usar jquery?
date: 2020-04-13 08:00:00 Z
categories:
- desarrollo
- jquery
- javascript
- HTML
comments: true
---

Para utilizar [__jquery__][1] se debe agregar la librería en la página web utilizando la etiqueta __script__.

Se especifican los datos de la forma siguiente:

{% highlight html linenos %}
<!-- Agregamos jquery desde un CDN -->
<script
 src="https://code.jquery.com/jquery-3.4.1.js"
 integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
 crossorigin="anonymous">
</script>
{% endhighlight %}

## __index.html__

A continuación les dejo un ejemplo completo de una página web con la inclusión de __jquery__ y la modificación de un elemento en la página mediante su uso.

{% highlight html linenos %}
<!doctype html>
<html lang="en">
 <head>
  <meta charset="utf-8">
  <title>Uso de Jquery</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Agregamos jquery desde un CDN -->
  <script
   src="https://code.jquery.com/jquery-3.4.1.js"
   integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
   crossorigin="anonymous"></script>
   <!-- Agregamos un script que lo utiliza -->
   <script type="text/javascript">
   // Utilizamos el método text para modificar el contenido
    $('#ejemplo').text("Hasta la vista baby!");
   </script>
 </head>
 <body>
  <p id="ejemplo">Hola, mundo</p>
 </body>
</html>
{% endhighlight %}

Cuando cargue la página el script va a cambiar el contenido del elemento __p__.

[__jquery__][1] ofrece una diversidad importante de métodos para manipular los elementos de una página web y generar dinamismo en el contenido o el diseño a través del manejo de los eventos de interacción.

[1]: https://jquery.com/ "Sitio Web oficial de Jquery"
