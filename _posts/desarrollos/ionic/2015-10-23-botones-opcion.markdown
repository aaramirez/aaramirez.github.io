---
title: "Ofreciendo opciones en las listas"
date: 2015-10-23 08:00:00
categories: ionic angularjs cordova tutorial
---
Otra forma de trabajar con la lista es ofrecer al usuario la opción de delizamiento a la izquierda (swipe left) en cada elemento de la lista.

Esa opción en __Ionic__ se denomina botones de opción  (option buttons) y se logra mediante la directiva [__ion-option-button__][4]. Esta opción es hija de [__item-item__][6].

Sólo se debe especificar a cada [__item-item__][6] las opciones mediante la directiva y se manega el evento con la directiva __ng-click__ de AngularJS.

Ingrese a [play.ionic.io][1] para obtener el código para iniciar el tutorial y haga FORK. __No olvide hacer FORK__.

  > El objetivo es:

  > - Especificar el identificador de la lista a través del atributo __delegate-handle__ de [__ion-list__][3].
  > - Crear las opciones en cada elemento ([__ion-item__][6]).
  > - Especificar mediante la directiva __ng-click__ que función va a manejar el evento en el controlador.
  > - Modificar el controlador para manejar cada evento de cada opción. 


En el *HTML*, en la directiva [__ion-list__][3] de Ionic agregue el atributo y especifique el nombre de la lista "my-list".

{% highlight html linenos %}
<ion-list delegate-handle="my-list">
{% endhighlight %}

En el *HTML*, en cada elemento agregue tres opciones, una para borrar, una para subir un elemento y otra para bajarlo en el orden.

{% highlight html linenos %}
<ion-item ng-repeat="item in items">
  <ion-option-button class="button-assertive icon ion-trash-a">
  </ion-option-button>
  <ion-option-button class="button-balanced icon ion-arrow-up-a">
  </ion-option-button>
  <ion-option-button class="button-positive icon ion-arrow-down-a">
  </ion-option-button>
  Item {{ item.id }}
</ion-item>
{% endhighlight %}

Ahora en cada opción agreguemos el manejo del evento a través de la directiva __ng-click__.

{% highlight html linenos %}
<ion-item ng-repeat="item in items">
  <ion-option-button class="button-assertive icon ion-trash-a" 
    ng-click="deleteClick(item)"></ion-option-button>
  <ion-option-button class="button-balanced icon ion-arrow-up-a" 
    ng-click="upClick(item)"></ion-option-button>
  <ion-option-button class="button-positive icon ion-arrow-down-a" 
    ng-click="downClick(item)"></ion-option-button>
  Item {{ item.id }}
</ion-item>
{% endhighlight %}

Lo primero que debemos hacer es inyectar el servicio para manejar las listas [__$ionicListDelegate__][5].

{% highlight javascript linenos %}
.controller('contentController', function($scope, $ionicListDelegate) {
{% endhighlight %}

Una vez agregado el servicio ahora debemos definir las funciones *deleteClick*, *upClick* y *downClick* en el controlador.

{% highlight javascript linenos %}
  $scope.deleteClick = function(item) {
    
  };
  $scope.upClick = function(item) {
    
  };
  $scope.downClick = function(item) {
    
  };
{% endhighlight %}

Ahora vamos a cerrar el menú de opciones cada vez que se haga click a alguna opción.

{% highlight javascript linenos %}
  $scope.deleteClick = function(item) {
    $ionicListDelegate.$getByHandle('my-list').closeOptionButtons();
  };
  $scope.upClick = function(item) {
    $ionicListDelegate.$getByHandle('my-list').closeOptionButtons();
  };
  $scope.downClick = function(item) {
    $ionicListDelegate.$getByHandle('my-list').closeOptionButtons();
  };
{% endhighlight %}

Ahora puede observar que una vez que desliza el menú a la izquierda y luego escoge una opción, el menú se cierra. Esto se logra utilizando el método *closeOptionButtons*. Se usa el servicio [__$ionicListDelegate__][5], se obtiene el identificador (*handle*) de la lista. Fíjese que el nombre es el que definimos en el *HTML* ('my-list').

Ahora falta ejecutar la acción correspondiente en cada controlador.

### deleteClick

{% highlight javascript linenos %}
$scope.deleteClick = function(item) {
  $scope.items.splice($scope.items.indexOf(item), 1);
  $ionicListDelegate.$getByHandle('my-list').closeOptionButtons();
};
{% endhighlight %}

### upClick

{% highlight javascript linenos %}
$scope.upClick = function(item) {
  var index = $scope.items.indexOf(item);
  if (index>0) {
    $scope.items.splice(index, 1);
    $scope.items.splice(index-1, 0, item);
  }
  $ionicListDelegate.$getByHandle('my-list').closeOptionButtons();
};
{% endhighlight %}

### downClick

{% highlight javascript linenos %}
$scope.downClick = function(item) {
  var index = $scope.items.indexOf(item);
  if (index<$scope.items.length) {
    $scope.items.splice(index, 1);
    $scope.items.splice(index+1, 0, item);
  }
  $ionicListDelegate.$getByHandle('my-list').closeOptionButtons();
};
{% endhighlight %}

Ahora puede revisar la funcionalidad de cada botón. El propósito de las opciones puede ser Editar o Compartir un elemento de la lista. Se hizo la prueba para Borrar o reordenar aunque para borrar existe la directiva __ion-delete-button__ y para reordenar existe __ion-reorder-button__ visto en los tutoriales respectivos, [Borrar elementos de una lista][7] y [Reordenar elementos de una lista][8]. 

Puede verificar el [resultado final][2] si lo desea.

[1]: http://play.ionic.io/app/ba2ef3020ef6 "Inicio del tutorial" 
[2]: http://play.ionic.io/app/f397442e3e7d "Resultado del tutorial"
[3]: http://ionicframework.com/docs/api/directive/ionList/ "ion-list"
[4]: http://ionicframework.com/docs/api/directive/ionOptionButton/ "ion-option-button"
[5]: http://ionicframework.com/docs/api/service/$ionicListDelegate/ "$ionicListDelegate"
[6]: http://ionicframework.com/docs/api/directive/ionItem/ "ion-item"
[7]: http://aaramirez.github.io/ionic/angularjs/cordova/tutorial/2015/10/21/delete-item-list.html "ion-delete-button"
[8]: http://aaramirez.github.io/ionic/angularjs/cordova/tutorial/2015/10/21/reordenar-elementos.html "ion-reorder-button"