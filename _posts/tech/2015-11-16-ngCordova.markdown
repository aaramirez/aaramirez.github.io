---
title: "Uso de plugins de Cordova en Ionic"
date: 2015-11-16 08:00:00
categories: ionic angularjs javascript tutorial QR
---
La forma de comunicarse con las funcionalidades del dispositivo, en [__ionic__][1], es a través de Cordova. En particular hay un wrapper para usar los plugins de Cordova denominado [__ngCordova__][2].

[__ngCordova__][2] facilita el uso de los plugins desde Angular y está desarrollado por la misma gente que desarrolló [__ionic__][1].

Vamos a crear un proyecto que use el plugin para la lectura de códigos QR desde una aplicación hecha en [__ionic__][1].

Primero vamos a iniciar un proyecto [__ionic__][1] con la plantilla *blank* mediante el comando:

  > ionic start QRReader blank

  > cd QRReader

  > ionic platform add ios 

  > ionic platform add android

Entre al directorio QRReader y se va a conseguir con el esqueleto de una aplicación [__ionic__][1]. Ahora ejecute:

  > ionic serve -l

De esta manera ya tiene un proyecto funcional sobre el cual vamos a partir para hacer la aplicación que utiliza [__ngCordova__][2] para leer códigos QR desde su aplicación.

Antes de iniciar podemos revisar algunas cosas previas, como por ejemplo los plugins de Cordova que vienen instalados en nuestra aplicación recien generada.

La forma de conocer cuales son los plugins instalados es mediante la línea de comando en la carpeta del proyecto:

  > ionic plugin list

Normalmente están instalados los plugins siguientes:

- [cordova-plugin-console][3]
- [cordova-plugin-device][4]: Que permite obtener información sobre el dispositivo donde corre la aplicación móvil.
- [cordova-plugin-splashscreen][5]
- [cordova-plugin-whitelist][6]

Es importante entender que cuando se utilizan las funcionalidades del dispositivo hay que utilizar los emuladores o los dispositivos reales para probar. Por ejemplo deberíamos conocer la línea de comandos de [__ionic__][1] para aprovechas las funcionalidades que nos ofrece el emulador. Esto se hace mediante la línea de comandos:

  > ionic help emulate

Como podemos ver hay dos opciones de interés que nos ayudan al proceso de desarrollo y a entender lo que pasa en la aplicación mediante mensajes en la cónsola. Estas son las opciones -l y -c. Entonces la opción -l usa livereload, lo cual implica que cuando se modifica algún archivo del proyecto este se carga en el dispositivo inmediatamente. La opción -c permite que los mensajes enviados a la cónsola mediante el comando *console.log()* se impriman en el terminal. Entonces la forma de utilizar el emulador es mediante la línea de comando siguiente:

  > ionic emulate android -lc

  > ionic emulate ios -lc

Por otra parte la forma de instalar [__ngCordova__][2] es, preferiblemente, mediante bower utilizando la línea de comando:

  > bower install ngCordova --save-dev

La opción *--save-dev* guarda la dependencia en el bower.json. Así que si alguien instala el proyecto sólo debe ejecutar __bower install__ para instalar las dependencias.

Puede fijarse en el directorio "www/lib" y se dará cuenta de que ngCordova está instalado.

En el archivo __index.html__ dentro del directorio __www__ vamos a agregar ngCordova antes de la inclusión de __cordova.js__.

{% highlight html linenos %}
<script src="lib/ngCordova/dist/ng-cordova.min.js"></script>
<script src="cordova.js"></script>
{% endhighlight %}

Ahora vamos a incluir el plugin [phonegap-plugin-barcodescanner][7] siguiendo las instrucciones o alternativamente el comando siguiente:

  > ionic plugin add phonegap-plugin-barcodescanner

En el cuerpo del __index.html__ vamos a definir el controlador y vamos a crear una lista con un botón para activar el scanner y dos items con el resultado:

{% highlight html linenos %}
<ion-content ng-controller="contentController">
  <div class="list">
    <div class="item" ng-click="scanQRCode()">
      Scan QRCode
    </div>
    <div class="item">
      { { resultText } }
    </div>
    <div class="item">
      { { resultFormat } }
    </div>
  </div>
</ion-content>
{% endhighlight %}

Primero vamos a inyectar la dependencia en la definición del módulo principal:

{% highlight javascript linenos %}
angular.module('starter', ['ionic', 'ngCordova'])
{% endhighlight %}

Ahora vamos a crear el controlador y definamos en el modelo *resultText* y *resultFormat* utilizando la documentación.

{% highlight javascript linenos %}
.controller('contentController', ['$scope','$cordovaBarcodeScanner', function($scope, $cordovaBarcodeScanner) {
  $scope.scanQRCode = function()  {
    $cordovaBarcodeScanner.scan().then(function(result) {
      $scope.resultText = result.text;
      $scope.resultForma = result.format;
      console.log(result);
    }, function(error) {
      console.log("error happened..!");
      console.log(error);
    });
  };
{% endhighlight %}

Ya puede probar la aplicación con el código siguiente:

<img src="/assets/img/qrcode.png">

Este proceso es similar para todos los plugin de Cordova que se pueden utilizar mediante ngCordova.

Espero les sirva.

[1]: http://ionicframework.com/ "ionic Framework"
[2]: http://ngcordova.com/ "ngCordova"
[3]: https://github.com/apache/cordova-plugin-console "cordova-plugin-console"
[4]: http://ngcordova.com/docs/plugins/device/ "cordova-plugin-device"
[5]: http://ngcordova.com/docs/plugins/splashscreen/ "cordova-plugin-splashscreen"
[6]: https://www.npmjs.com/package/cordova-plugin-whitelist "cordova-plugin-whitelist"
[7]: https://github.com/phonegap/phonegap-plugin-barcodescanner "phonegap-plugin-barcodescanner"
[8]: https://cordova.apache.org/plugins/ "listado de plugins"