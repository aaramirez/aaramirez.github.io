---
title: "Listas con deslizamiento (scroll) ilimitado"
date: 2015-10-24 08:00:00
categories: ionic angularjs cordova tutorial
---
En [__Ionic__][1] es posible cargar datos parcialmente en una lista y si el usuario llega al último elemento de la lista buscar más elementos. Esto se logra con la directiva [__ion-infinite-scroll__][2]. Esta permite llamar alguna rutina cada vez que llegamos al final de la lista o estamos cerca de llegar al final.

Ingrese a [play.ionic.io][2] para obtener el código para iniciar el tutorial y haga FORK. __No olvide hacer FORK__.

> El objetivo es:

  > - Agregar la directiva [__ion-infinite-scroll__][4] después de la directiva [__ion-list__][5].
  > - Crear en el controlador la rutina que va a proveer más datos para la lista. Consiste en agregar 10 elementos más.
  > - Hacer [broadcast][6] del evento __scroll.infiniteScrollComplete__ para que la lista no siga mostrando el spinner.
  > - Especificar mediante la directiva __ng-if__ en la directiva [__ion-infinite-scroll__][4] que función va a indicar si hay mas datos.
  > - Crear en el controlador la rutina que indica si hay mas datos. 

En el *HTML*, después la directiva [__ion-list__][5] agregue la directiva [__ion-infinite-scroll__][4] y especifique la rutina que busca y agrega los datos con el atributo __on-infinite__ y la distancia en que se activa la rutina con el atributo __distance__.

{% highlight html linenos %}
</ion-list>
<ion-infinite-scroll on-infinite="moreData()" distance="10%">
</ion-infinite-scroll>
{% endhighlight %}

Ahora vamos a agregar la rutina *moreData* en el controlador y agreguemos 10 elementos a la lista utilizando el método *push* de JavaScript.

{% highlight javascript linenos %}
$scope.moreData = function() {
  var l = $scope.items.length;
  for (var i=l+1; i<=l+10; i++) {
    $scope.items.push({ id: i});
  }
};
{% endhighlight %}

Como podemos ver cada vez que se llega al final de la lista se cargan más elementos a la lista pero queda el *Spinner* dando vueltas. Esto es debido a que no hemos hecho *broadcast* del evento que indica que ya se cargaron los datos. Esto se hace a través de [__$scope.$broadcast__][6] del evento [__scroll.infiniteScrollComplete__][4].

{% highlight javascript linenos %}
$scope.moreData = function() {
  var l = $scope.items.length;
  for (var i=l+1; i<=l+10; i++) {
    $scope.items.push({ id: i});
  }
  $scope.$broadcast('scroll.infiniteScrollComplete');
};
{% endhighlight %}

Ahora vamos a explorar otra funcionalidad. Hasta ahora hemos agregado elementos sin límite, pero es posible en muchos casos que se desee limitar la cantidad de elementos o que exista un límite en la cantidad de datos. Para lograr este comportamiento ahora nos valemos de *AngularJS* y utilizamos la directiva [__ng-if__][7]. Esta permite remover o recrear una porción del DOM (la estructura de elementos de una página) basado en el valor de una expresión (__expression__). La vamos a colocar en la directiva [__ion-infinite-scroll__][4] y vamos a indicar la rutina que provee dicha información.

{% highlight html linenos %}
<ion-infinite-scroll ng-if="dataAvailable()" on-infinite="moreData()" distance="10%">
{% endhighlight %}

Ahora vamos a implementar la rutina *dataAvailable* en el controlador indicando que no se carguen más de 40 elementos.

{% highlight javascript linenos %}
$scope.dataAvailable = function() {
  return $scope.items.length<40;
};
{% endhighlight %}

Puede verificar el [resultado del tutorial][3] si lo desea.

[1]: http://ionicframework.com "Ionic Framework"
[2]: http://play.ionic.io/app/ba2ef3020ef6 "Inicio del tutorial" 
[3]: http://play.ionic.io/app/6c950f03eb6a "Resultado del tutorial"
[4]: http://ionicframework.com/docs/api/directive/ionInfiniteScroll/ "ionInfiniteScroll"
[5]: http://ionicframework.com/docs/api/directive/ionList/ "ion-list"
[6]: https://docs.angularjs.org/api/ng/type/$rootScope.Scope "$scope"
[7]: https://docs.angularjs.org/api/ng/directive/ngIf "ng-if"