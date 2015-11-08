---
title: "Navegación en Ionic"
date: 2015-11-04 08:00:00
categories: ionic angularjs cordova tutorial
---
Ya hemos avanzado en el uso de muchas de las funcionalidades de Ionic por el lado del JavaScript. Hasta ahora hemos trabajado en una sola pantalla. Las aplicaciones en general tienen varias pantallas y se debe ofrecer una forma de navegar en la aplicación y además de avanzar y poder regresar a pantallas previas.

[__ionic__][1] ofrece para ello la directiva [__ion-nav-view__][2]. Esta permite mantener una o varias historias de navegación. El componente sobre el cual se apoya el framework es [__ui-router__][5] el cual se basa en el concepto de estados en lugar de el concepto de rutas, un estado es un lugar en la aplicación, estos lugares están descritos a través del controlador, plantillas y las vistas. Es decir, es posible mantener una jerarquía de estados y además tener vistas paralelas (parallel nested states). De esta manera se manejan las semejanzas que pueden existir entre las vistas, es decir, los estados hijos heredan las propiedades de los padres.

Ingrese a [play.ionic.io][3] para obtener el código para iniciar el tutorial y haga FORK. __No olvide hacer FORK__.

  > El objetivo es:

  > - Crear una aplicación con múltiples páginas (o vistas).
  > - Crear las vistas, una de presentación, la segunda una lista de empleados y la tercera el detalle del empleado.
  > - Definir los estados de la aplicación con [__ui-router__][5].
  > - Implementar la navegación mediante el uso de [__ui-sref__][6].

Estamos partiendo de una aplicación sin nada. Entonces debemos definir el controlador de la aplicación en *HTML*.

{% highlight html linenos %}
<body ng-app="app" ng-controller="viewController">
{% endhighlight %}

Ahora hay que implementar el controlador (vacio por ahora) en *JS*.

{% highlight js linenos %}
.controller('viewController', function($scope) {
  
});
{% endhighlight %}

Ahora vamos a utilizar las directivas que ofrecen la posibilidad de mantener memoria sobre la navegación del usuario  (es decir, los estados por los cuales has navegado). Esta historia no es única, hay una por estado.

Las directivas que hay que estudiar son:

- [__ion-nav-view__][2] - Se utiliza para dibujar (render) las plantillas. Estas plantillas están asociadas a algún estado y a un controlador. Esta asociación se realiza en la configuración de [__ui-router__][5].
- [__ion-view__][7] - Es un contenedor del contenido de la vista. Es hijo de [__ion-nav-view__][2]. Es este se definen el encabezado (header) o los elementos de navegación.
- [__ion-nav-bar__][8]
- [__ion-nav-back-button__][]
- [__ion-nav-buttons__][]
- [__ion-nav-title__][]
- [__nav-transition__][]
- [__nav-direction__][]

Dentro del cuerpo del *HTML* definamos la barra de navegación mediante la directiva [__ion-nav-bar__][8], el contenedor de las plantillas [__ion-nav-view__][2]. Además definamos una primera plantilla que será la presentación de la empresa *pres.html*.

{% highlight html linenos %}
<ion-nav-bar  class="bar-assertive">
  <h1 class="title">Padre!!</h1>
</ion-nav-bar>

<ion-nav-view>
</ion-nav-view>

<script id="templates/pres.html" type="text/ng-template">
  <ion-view view-title="Presentación">
    <h1>Presentación</h1>
  </ion-view>
</script>
{% endhighlight %}



{% highlight js linenos %}
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('page1', {
      url: "/page1",
      templateUrl: "templates/page1.html",
      controller: "Page1Ctrl"
    });
  
  $urlRouterProvider.otherwise('page1');
  
});
{% endhighlight %}

To break this down, the name of the state (stateName) is the first parameter passed, and the JSON object containing the state information (stateConfig) is the second parameter. The URL is used to navigate directly to the state in a href, the templateUrl tells what file the state should use as a view, and the controller is used to communicate between the view and the $scope object. The controller has already been created in app.js.

{% highlight html linenos %}
<button ui-sref="page2" class="button button-block">Go to Page 2</button>
{% endhighlight %}

he key here is the ui-sref directive. It allows you to navigate to a state based on the stateName. Note that this is not using the url property in the stateConfig object, but the first parameter passed to the state() method, stateName. You can now click on this button to go to Page 2.


You should be able to navigate from Page 1 all the way to Page 3. You will notice the header changes to show the value of the view-title attribute. You may have also noticed that there is no way to go back.

{% highlight html linenos %}
<ion-nav-bar class="bar-positive">
 <ion-nav-back-button></ion-nav-back-button>
</ion-nav-bar>
{% endhighlight %}

Now, after you navigate, you will be able to go back to the previous page, using the button in the header. You can customize the back button to use a different icon or hide the previous page's title, if you would like. Take a look at Ionic's documentation for more cool things!

{% highlight html linenos %}
<ion-view view-title="{{myTitle}}">
{% endhighlight %}

{% highlight js linenos %}
.controller('Page1Ctrl', function($scope) {
  $scope.myTitle = 'My New Title';
})
{% endhighlight %}

This is useful when you want to get the title from an API call. This is a basic introduction to the layout of a mobile app, built with Ionic.

Si desea, puede ver el [resultado][4]. 



<style>
.phone {
  float: right;
  position: relative;
  z-index: 1;
  width: 380px;
  height: 810px;
  background: url("/assets/img/phone.png") no-repeat right top;
  margin-left: 20px;
}
.embed_iframe {
  position: absolute;
  width: 320px !important;
  height: 568px;
  top: 104px;
  left: 37px;
}
</style>
<div>
  <span>Adicionalmente pueden ver el ejemplo de la página de __ionic__.</span>
  <div class="phone">
  <iframe id="cp_embed_odqCz" src="//codepen.io/ionic/embed/odqCz?height=568&amp;theme-id=3572&amp;slug-hash=odqCz&amp;default-tab=result&amp;user=ionic" scrolling="no" frameborder="0" height="568" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="embed_iframe" style="width: 100%; overflow: hidden;"></iframe>
  </div>
</div>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


[1]: http://ionicframework.com "ionic Framework"
[2]: http://ionicframework.com/docs/api/directive/ionNavView/ "ion-nav-view"
[3]: http://play.ionic.io/app/97b6955c9bca "Inicio del tutorial"
[4]: http://play.ionic.io/app/d67dd42c983d "Resultado del tutorial"
[5]: https://github.com/angular-ui/ui-router/wiki "ui-router"
[6]: http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref "ui-sref"
[7]: http://ionicframework.com/docs/api/directive/ionView/ "ion-view"
[8]: 
[9]:
[10]:
[11]:
[12]:
