---
title: Patrón apropiado
date: 2015-10-19 08:00:00 Z
categories:
- desarrollo
- ionic
- angularjs
comments: true
---

Partiendo el tutorial anterior vamos a hacer una modificación para dar la idea de un uso más apropiado de los controladores e introducir el concepto de servicios.

Ingrese a [play.ionic.io][1] para obtener el código para iniciar el tutorial y haga FORK. __No olvide hacer FORK__.

> El objetivo es crear un servicio que provea los datos y que este servicio sea utilizado en el controlador.

En el *JS* defina el servicio que va a exponer los datos a través de un método *getData*.

{% highlight js  %}
.service('dataService', function() {
  return {
    data: [
      {id:"1"},
      {id:"2"},
      {id:"3"},
      {id:"4"},
      {id:"5"},
      {id:"6"},
      {id:"7"},
      {id:"8"},
      {id:"9"},
      {id:"10"}
    ],
    getData: function() {
      return this.data;
    }
  }
})
{% endhighlight %}

Borre la definición de *$scope.items* del controlador. Debe quedar como sigue:

{% highlight javascript  %}
.controller('contentController', function($scope){
  
});
{% endhighlight %}

Para poder utilizar el servicio en el controlador se debe inyectar el servicio de la forma siguiente:

{% highlight javascript  %}
.controller('contentController', function($scope, dataService){
  
});
{% endhighlight %}

Ahora utilice el servicio y obtenga los datos mediante el método *getData* del servicio *dataService* y asígnelo a *$scope.items*.

{% highlight js  %}
.controller('contentController', function($scope, dataService){
  $scope.items = dataService.getData();
})
{% endhighlight %}

Este corto ejercicio tiene el objetivo de hacer énfasis en que el controlador debe proveer los datos y el comportamiento a la vista. En el controlador se debe evitar obtener datos directamente y para ello el patrón es crear servicios que sean consumidos por el controlador y se aisla el proceso de obtención de los datos.

En general la mejor opción para obtener datos y transformarlos al formato o estructura que requiera el controlador es crear servicios. Fíjese que el código en el controlador queda bastante resumido.

Puede verificar el [resultado final][2] si lo desea.

[1]: http://play.ionic.io/app/ba2ef3020ef6 "Inicio del tutorial" 
[2]: http://play.ionic.io/app/4b718c0aa1df "Resultado del tutorial"