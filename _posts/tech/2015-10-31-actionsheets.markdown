---
title: "Action Sheets"
date: 2015-10-31 08:00:00
categories: ionic angularjs cordova tutorial
comments: true
---
Ya hemos visto que en el caso de las listas ([__ion-list__][1]) es posible utilizar [__ion-delete-button__][3], [__ion-reorder-button__][4], [__ion-option-button__][2].

Ahora vamos a trabajar con un menú emergente denominado [__Action Sheet__][5] que suele aparecer cuando hacemos un gesto de quedar presionando un elemento de usa lista o sencillamente presionamos un botón. Este menú aparece en la parte inferior de la pantalla y ofrece opciones relacionadas con el elemento con el cual se está interactuando, es decir, es un menú contextual, no es general. Es un menú asociado al elemento y suele ofrecer las acciones relacionadas con el elemento con el que se interactua.

Ingrese a [play.ionic.io][6] para obtener el código para iniciar el tutorial y haga FORK. __No olvide hacer FORK__.

  > El objetivo es:

  > - Mostrar las opciones del [__Action Sheet__][5] con un gesto [__on-hold__][7].
  > - Se define el gesto en el __item__.
  > - Se inyecta el servicio [__$ionicActionSheet__][5] en el controlador
  > - Se implementa el uso del [__Action Sheet__][5] con sus diferentes opciones

En el *HTML*, se debe definir qué acción o interacción por parte del usuario va a activar el [__Action Sheet__][5]. Hemos decidido utilizar un gesto denominado [__on-hold__][8] que consiste en que el usuario mantiene presionado un elemento o un botón por más de 500ms. La forma de capturarlo es especificar en el elemento la directiva [__on-hold__][8] e indicar la rutina que va a manejar el evento en el controlador.

{% highlight html  %}
<ion-item on-hold="showActionSheet(item)" ng-repeat="item in items">
{% endhighlight %}

A continuación la rutina que lo maneja

{% highlight js  %}
$scope.showActionSheet = function (i) {
  alert('Action Sheet '+i.id);
}
{% endhighlight %}

Como puede observar al mantener presionado el elemento de la lista aparece una alerta con el número del item.

Ahora vamos a inyectar el servicio [__$ionicActionSheet__][5] en el controlador. Para fines del ejercicio también vamos a inyectar [__$timeout__][9]

{% highlight js  %}
.controller('contentController', 
  function($scope, dataService, $ionicListDelegate, 
    $ionicActionSheet, $timeout){
{% endhighlight %}

Ahora vamos a implementar *showActionSheet* agregando un botón para cancelar, otro para borrar, uno para mover un item arriba y otro para mover un item abajo, aprovechando el código de los tutoriales previos.

{% highlight js  %}
$scope.showActionSheet = function (item) {
  $ionicActionSheet.show({
    titleText: 'Manipula elementos de la lista...',
    buttons: [
      { text: 'Subir' },
      { text: 'Bajar' }
    ],
    buttonClicked: function(index, buttonObj) {
      switch(index) {
        case 0:
          dataService.upData(item,$scope.items.indexOf(item));
          return true;
        case 1:
          dataService.downData(item,$scope.items.indexOf(item));
          return true;
      }
    },
    destructiveText: 'Borrar',
    destructiveButtonClicked: function() {
      dataService.deleteData($scope.items.indexOf(item));
      return true;
    },
    cancelText: 'Cancelar',
    cancel: function() {}
  });
}
{% endhighlight %}

Para mantener el orden se definió el título con *titleText*, luego los botones (realmente opciones) con *buttons* y el manejo del evento con *buttonClicked*. Luego el texto de la acción "peligrosa" como Borrar usando *destructiveText* y *destructiveButtonClicked* y por último la opción de cancelar con *cancelText* y la función *cancel*.

Por último leyendo la documentación resulta que __$ionicActionSheet.show()__ retorna una función que cuando la invocas oculta y cancela el __ActionSheet__.

La rutina *showActionSheet* queda así:

{% highlight js  %}
$scope.showActionSheet = function (item) {
  var functionToHideSheet = $ionicActionSheet.show({
    titleText: 'Manipula elementos de la lista...',
    buttons: [
      { text: 'Subir' },
      { text: 'Bajar' }
    ],
    buttonClicked: function(index, buttonObj) {
      switch(index) {
        case 0:
          dataService.upData(item,$scope.items.indexOf(item));
          return true;
        case 1:
          dataService.downData(item,$scope.items.indexOf(item));
          return true;
      }
    },
    destructiveText: 'Borrar',
    destructiveButtonClicked: function() {
      dataService.deleteData($scope.items.indexOf(item));
      return true;
    },
    cancelText: 'Cancelar',
    cancel: function() {}
  });
  
 $timeout(function() {
   functionToHideSheet();
 }, 3000);
}
{% endhighlight %}

Si en tres segundos no se hace nada el __ActionSheet__ se cierra solo ayudado con el servicio __$timeout__.

Si desea ver el [resultado][7] lo puede revisar. Otro [ejemplo hecho en clase][10].

[1]: http://aaramirez.github.io/ionic/angularjs/cordova/tutorial/2015/10/18/ionic-basico-listas.html "ion-list"
[2]: http://aaramirez.github.io/ionic/angularjs/cordova/tutorial/2015/10/23/botones-opcion.html "ion-option-button"
[3]: http://aaramirez.github.io/ionic/angularjs/cordova/tutorial/2015/10/21/delete-item-list.html "ion-delete-button"
[4]: http://aaramirez.github.io/ionic/angularjs/cordova/tutorial/2015/10/22/reordenar-elementos.html "ion-reorder-button"
[5]: http://ionicframework.com/docs/api/service/$ionicActionSheet/ "Action Sheet"
[6]: http://play.ionic.io/app/d25895c62818 "Inicio del tutorial"
[7]: http://play.ionic.io/app/1cd8b0ca7174 "Resultado del tutorial"
[8]: http://ionicframework.com/docs/api/directive/onHold/ "on-hold"
[9]: https://docs.angularjs.org/api/ng/service/$timeout "$timeout"
[10]: http://play.ionic.io/app/da7e7a802c21 "Ejemplo en clase"

