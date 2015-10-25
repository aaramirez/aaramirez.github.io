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
<ion-list show-reorder="showReorder">
{% endhighlight %}

Ahora vamos a crear un botón que permita al usuario indicar si desea borrar un elemento de la lista.

{% highlight html linenos %}
<ion-header-bar class="bar-positive">
  <div class="buttons">
    <button class="button button-icon icon ion-shuffle"
      ng-click="showReorder = !showReorder">
    </button>
    <h1 class="title">Ionic List</h1>
  </div>
</ion-header-bar>
{% endhighlight %}

Ahora puede ver que hay un botón en la barra superior, pero no hace nada. Nos corresponde ahora indicar en cada elemento de la lista qué debe hacer cuando se presiona el botón. Eso lo hacemos agregando el tag __ion-reorder-button__ dentro de cada elemento de la lista, es decir, dentro del __ion-item__.

{% highlight html linenos %}
<ion-item ng-repeat="item in items">
  <ion-reorder-button class="ion-navicon">
  </ion-reorder-button>
  Item {{ item.id }}
</ion-item>
{% endhighlight %}

Ahora si presiona de nuevo el botón en la barra superior para reordenar, aparece en cada elemento de la lista el ícono para reordenarlo, pero mueve un elemento de la lista todavía no pasa nada. Ahora hay que manejar el evento __on-reorder__ de Ionic al tab __ion-reorder-button__ y especificar la función en el controlador que va a realizar la operación de reordenar los elementos.

{% highlight html linenos %}
<ion-item ng-repeat="item in items">
  <ion-reorder-button class="ion-navicon"
    on-reorder="reorderItem(item, $fromIndex, $toIndex)">
  </ion-reorder-button>
  Item {{ item.id }}
</ion-item>
{% endhighlight %}

Ahora en *JS* cree la función *reorderItem* para ejecutar la acción de reordenar.

Tenemos que agregar una función en el controlador y otra en el servicio. Vamos con la primera.

{% highlight javascript linenos %}
$scope.reorderItem = function(item, fromIndex, toIndex) {
  dataService.reorderDataItem(item, fromIndex, toIndex);
};
{% endhighlight %}

Ahora modifiquemos el servicio para reordenar la lista.

{% highlight javascript linenos %}
getData: function() {
  return this.data;
},
reorderDataItem: function(item, from, to) {
  this.data.splice(from, 1);
  this.data.splice(to, 0, item);
}
{% endhighlight %}

Ahora en la lista presione el botón para reordenar en la barra superior y pruebe la funcionalidad.

Puede verificar el [resultado final][2] si lo desea.

[1]: http://play.ionic.io/app/4b718c0aa1df "Inicio del tutorial" 
[2]: http://play.ionic.io/app/6320ecffa017 "Resultado del tutorial"
[3]: http://ionicframework.com/docs/api/directive/ionList/ "ion-list"
[4]: http://ionicframework.com/docs/api/directive/ionReorderButton/ "ion-reorder-button"