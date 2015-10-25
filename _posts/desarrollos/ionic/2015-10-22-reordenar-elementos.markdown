---
title: "Reordenar elementos de una lista"
date: 2015-10-21 08:00:00
categories: ionic angularjs cordova tutorial
---
Otra de las facilidades que ofrece __Ionic__ es la posibilidad para reordenar elementos de una lista. Esto se hace a través del atributo __show-reorder__ de __ion-list__.

Partiendo de otro tutorial vamos a hacer una modificación para mostrar la manera de utilizar __ion-list__ y [__ion-reorder-button__][4] en una pantalla con una lista.

Ingrese a [play.ionic.io][1] para obtener el código para iniciar el tutorial y haga FORK. __No olvide hacer FORK__.

  > El objetivo es:

  > - Especificar el atributo __show-reorder__ en el tag __ion-list__.
  > - Crear un botón que sea presionado cuando se desea reordenar la lista.
  > - Indicar al __ion-item__ qué mostrar y qué hacer cuando se presiona el botón "Reordenar" utilizando el tag __ion-reorder-button__.
  > - Modificar el controlador para reordenar la lista. 

En el *HTML* hay que agregar el atributo [__show-reorder__][3] al [tag __ion-list__][3].

{% highlight html linenos %}

{% endhighlight %}

Ahora vamos a crear un botón que permita al usuario indicar si desea borrar un elemento de la lista.

{% highlight html linenos %}
<ion-header-bar class="bar-positive">
  <div class="buttons">
    <button class="button button-icon icon ion-ios-minus-outline"
      ng-click="showDeleteItem = !showDeleteItem"></button>
    <h1 class="title">Ionic List</h1>
  </div>
</ion-header-bar>
{% endhighlight %}

Ahora puede ver que hay un botón en la barra superior, pero no hace nada. Nos corresponde ahora indicar en cada elemento de la lista qué debe hacer cuando se presiona el botón borrar.

{% highlight html linenos %}
<ion-item ng-repeat="item in items">
  <ion-delete-button class="ion-minus-circled">
  </ion-delete-button>
  Item {{ item.id }}
</ion-item>
{% endhighlight %}

Ahora si presiona de nuevo el botón en la barra superior para borrar, aparece en cada elemento de la lista el ícono para borrar el elemento, pero si el botón de un elemento de la lista no pasa nada. Ahora hay que manejar el evento __ng-click__ de Angular al tab __ion-delete-button__ y especificar la función en el controlador que va a realizar la operación de borrar el elemento de la lista.

{% highlight html linenos %}
<ion-item ng-repeat="item in items">
  <ion-delete-button class="ion-minus-circled" ng-click="deleteItem(item)">
  </ion-delete-button>
  Item {{ item.id }}
</ion-item>
{% endhighlight %}

Ahora en *JS* cree la función *deleteItem* para ejecutar la acción de borrar. La función debe llamar el servicio que manipula la lista y ejecutar la función para borrar un elemento.

Tenemos que agregar una función en el controlador y otra en el servicio. Vamos con la primera.

{% highlight javascript linenos %}
$scope.deleteItem = function(item) {
  dataService.deleteDataItem($scope.items.indexOf(item));
};
{% endhighlight %}

Ahora modifiquemos el servicio para borrar un elemento de la lista.

{% highlight javascript linenos %}
getData: function() {
  return this.data;
},
deleteDataItem: function(index) {
  return this.data.splice(index, 1);
}
{% endhighlight %}

Ahora en la lista presione el botón de borrado en la barra superior y pruebe la funcionalidad.

Puede verificar el [resultado final][2] si lo desea.

[1]: http://play.ionic.io/app/4b718c0aa1df "Inicio del tutorial" 
[2]: http://play.ionic.io/app/4b718c0aa1df "Resultado del tutorial"
[3]: http://ionicframework.com/docs/api/directive/ionList/ "ion-list"
[4]: http://ionicframework.com/docs/api/directive/ionReorderButton/ "ion-reorder-button"