---
title: "Uso de listas en Ionic"
date: 2015-10-18 08:00:00
categories: ionic angularjs cordova tutorial
---
Siguiendo con los tutoriales sobre Ionic vamos a trabajar con listas y su uso básico.

Ingrese a [play.ionic.io](http://play.ionic.io/app/d5fde9db2473)

Se va a conseguir con una mini aplicación con una pantalla con un encabezado con fondo azul en el *HTML* y en el *JS* está definido el módulo __app__.

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <link href="https://code.ionicframework.com/1.0.0/css/ionic.min.css" rel="stylesheet">
    <script src="https://code.ionicframework.com/1.0.0/js/ionic.bundle.js"></script>
  </head>
  <body ng-app="app">
    <ion-pane>
      <ion-header-bar class="bar-positive">
        <div class="buttons">
          <h1 class="title">Ionic List</h1>
        </div>
      </ion-header-bar>
    
      <ion-content>
        
      </ion-content>
    </ion-pane>
  </body>
</html>
{% endhighlight %}

{% highlight js %}
angular.module('app', ['ionic'])
{% endhighlight %}

