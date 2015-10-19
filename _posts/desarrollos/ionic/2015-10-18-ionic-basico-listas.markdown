---
title: "Uso de listas en Ionic"
date: 2015-10-18 08:00:00
categories: ionic angularjs cordova tutorial
---
Siguiendo con los tutoriales sobre Ionic vamos a trabajar con listas y su uso básico.

Ingrese a [play.ionic.io][1] para obtener el código para iniciar el tutorial.

Se va a conseguir con una mini aplicación con una pantalla con un encabezado con fondo azul en el *HTML* y en el *JS* está definido el módulo __app__.

El código del *HTML* es el siguiente:

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

El código del *JS* es el siguiente:

{% highlight js %}
angular.module('app', ['ionic'])
{% endhighlight %}

Vamos a crear una lista dentro del tag __ion-content__ utilizando el tag __ion-list__ y cree un primer *item* utilizando el tag __ion-item__, en el contenido del *item* agregue la palabra *Item*.

{% highlight html %}
<ion-content>
	<ion-list>
		<ion-item>
			Item
		</ion-item>
	</ion-list>
</ion-content>
{% endhighlight %}

Ahora ya tiene una lista con un *item*. La forma de crear listas que tienen conexión con el controlador es utilizar los *tags* específicos de ionic. Ud. podría crear una lista mediante la clase CSS *list* si sólo quiere aplicar el estilo de una lista a algún elemento del DOM.

Como lo usual es que la vista (nuestra pantalla) muestre los datos que se proporcionan a través del controlador, ahora nos corresponde definir el controlador para esta pantalla.

Primero definamos el controlador agregando al tag __ion-content__ la directiva *ng-controller* e indique que el nombre del controlador es *contentController*. Esta directiva (que proporciona AngularJS) permite asociar un controlador a este segmento de contenido (al contenido en __ion-content__) en la pantalla.

{% highlight html %}
<ion-content ng-controller="contentController">

</ion-content>
{% endhighlight %}

Ahora vamos a definir *contentController* en *JS*. Esto se hace definiendo un controlador con la llamada a *.controller* y especificando como parámetros el nombre (*contentController*) y la función que va a ser ejecutada. Es decir, la forma general de definir un controlador es la siguiente:

{% highlight js %}
.controller('NOMBRE DEL CONTROLADOR', function(Servicios que se desea inyectar){
	// Contenido del controlador
});
{% endhighlight %}

Normalmente a los controladores se le inyecta *$scope*, nuestro controlador quedaría:

{% highlight js %}
.controller('contentController', function($scope){
	// Contenido del controlador
});
{% endhighlight %}

Ahora debemos especificar los datos que le vamos a exponer a la pantalla (la vista) a través de *$scope*. Vamos a definir un arreglo denominado *items* (*$scope.items*) y le vamos a asignar los valores. El arreglo va a estar compuesto por 10 *items* con un atributo de nombre *id* y un valor numérico.

{% highlight js %}
.controller('contentController', function($scope){
	// Contenido del controlador
	$scope.items = [
		{ id: "1" },
		{ id: "2" },
		{ id: "3" },
		{ id: "4" },
		{ id: "5" },
		{ id: "6" },
		{ id: "7" },
		{ id: "8" },
		{ id: "9" },
		{ id: "10"}
	];
});
{% endhighlight %}

Ahora debemos utilizar *items* en la vista. Para ello vamos a recorrer el arreglo de *items* utilizando la directiva *ng-repeat* que proporciona *AngularJS* de la siguiente manera:

{% highlight html %}
<ion-item ng-repeat="item in items">
	Item \{\{ item.id \}\}
</ion-item>
{% endhighlight %}

Note que en la vista no es necesario colocar *$scope.items*, es suficiente con especificar *items* para acceder a esta variable definida en el controlador.

Puede verificar el [resultado final][2] si lo desea.

[1]: http://play.ionic.io/app/8108d036152d "Primer paso - Base de inicio" 
[2]: http://play.ionic.io/app/ba2ef3020ef6 "Resultado del tutorial" 








