---
title: "Navegación en Ionic"
date: 2015-11-04 08:00:00
categories: ionic angularjs cordova tutorial
---
Ya hemos avanzado en el uso de muchas de las funcionalidades de Ionic por el lado del JavaScript. Hasta ahora hemos trabajado en una sola pantalla. Las aplicaciones en general tienen varias pantallas y se debe ofrecer una forma de navegar en la aplicación y además de avanzar y poder regresar a pantallas previas.

[__ionic__][1] ofrece para ello la directiva [__ion-nav-view__][2]. Esta permite mantener una o varias historias de navegación. El componente sobre el cual se apoya el framework es [__ui-router__][5] el cual se basa en el concepto de estados en lugar de el concepto de rutas, un estado es un lugar en la aplicación, estos lugares están descritos a través del controlador, plantillas y las vistas. Es decir, es posible mantener una jerarquía de estados, es decir, un estado hereda las propiedades de otro estado padre o dicho de otra manera, es posible tener un estado padre que ofrece elementos que todos sus hijos pueden aprovechar. Además se pueden tener vistas paralelas dentro de un estado (parallel nested views).

Ingrese a [play.ionic.io][3] para obtener el código para iniciar el tutorial y haga FORK. __No olvide hacer FORK__.

  > El objetivo es:

  > - Crear una aplicación con múltiples páginas (o vistas).
  > - Crear las vistas, una de presentación, la segunda una lista de empleados, la tercera el detalle del empleado y la cuarta con información de contacto.
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

- [__ion-nav-view__][2] - Se utiliza para dibujar (render) las plantillas. Estas plantillas están asociadas a algún estado y a un controlador. Esta asociación se realiza en la configuración de [__ui-router__][5]. Esta directiva es la que finalmente se expande a la plantilla que corresponda según el estado en el que se encuentra la aplicación. Es decir, es como un "*frame*" donde se dibuja la plantilla correspondiente.
- [__ion-view__][7] - Es un contenedor del contenido de la vista. Es hijo de [__ion-nav-view__][2]. Es este se definen el encabezado (header) o los elementos de navegación.
- [__ion-nav-bar__][8] - Es la barra superior, donde se puede colocar un título (ya sea texto o algo más complejo en HTML) y los botones de navegación izquierdo y derecho. Puede ser sobreescrita por los estados subsiguientes o modificada en su comportamiento.
- [__ion-nav-back-button__][9] - Crea un botón de navegación hacia el estado previo. Este botón aparece si hay una historia de navegación previa. El comportamiento y la apariencia del botón se pueden modificar.
- [__ion-nav-buttons__][10] - Se utiliza para definir los botones que debe aparecer en el [__ion-nav-bar__][8]. Esta definición se realiza dentro del [__ion-view__][7]. Estos botones sobreescriben o reemplazan los que se hayan definido previamente. Es un descendiente inmediato de [__ion-view__][7].
- [__ion-nav-title__][11] - Se utiliza para definir un título específico en *HTML* para la vista dentro del [__ion-view__][7]. 
- [__nav-transition__][12] - Permite indicar el tipo de transición que se debe utilizar para pasar de una vista a otra.
- [__nav-direction__][13] - Permite indicar la dirección en la cual se debe animar la transición de una vista a otra.

Dentro del cuerpo del *HTML* definamos la barra de navegación mediante la directiva [__ion-nav-bar__][8], el contenedor de las plantillas [__ion-nav-view__][2]. Además definamos una primera plantilla que será la presentación de la empresa *pres.html*.

{% highlight html linenos %}
<ion-nav-bar  class="bar-assertive">
<ion-nav-title>
  Padre
</ion-nav-title>
</ion-nav-bar>

<ion-nav-view>
</ion-nav-view>

<script id="states/pres/pres.html" type="text/ng-template">
  <ion-view view-title="Presentación">
    <ion-nav-title>
      Hijo!
    </ion-nav-title>
    <ion-content class="padding">
      <h1>Presentación contenido</h1>
    </ion-content>
  </ion-view>
</script>
{% endhighlight %}

Hay varias pruebas que debe hacer para entender la prioridad de los títulos, como eliminar el __view-title__ y ver el resutlado y también eliminar el __ion-nav-title__ de la plantilla y ver el resultado.

Para ver el resulado ahora definamos el estado. La definición de un estado básicamente consiste en asociar una plantilla con un controlador bajo un nombre. Además se puede asociar una ruta. Esto se hace mediante la rutina config.
Se deben inyectar los servicios __$stateProvider__ y __$urlRouterProvider__. La rutina __state__ toma como parámetros el nombre del estado y el objeto que especifica sus atributos. En particular __url__, __templateUrl__ y __controller__. __url__ sirve como ruta para ser utilizada con __href__. El nombre del estado se puede utilizar con __ui-sref__. __templateUrl__ es la plantilla que se utiliza y __controller__ el controlador que asocia a la plantilla con el objeto __$scope__.

{% highlight js linenos %}
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('pres', {
      url: '/pres',
      templateUrl: 'states/pres/pres.html',
      controller: 'presController'
    });
  $urlRouterProvider.otherwise('/pres');
});
{% endhighlight %}

Ahora en la plantilla que ya definimos vamos a agregar un botón para navegar a la lista de empleados.

{% highlight html linenos %}
<ion-content class="padding">
  <h1>Presentación contenido</h1>
  <button ui-sref="empleado" class="button button-block">Ver el equipo de trabajo</button>
</ion-content>
{% endhighlight %}

Ahora tenemos un botón que nos debería llevar al estado *empleados* que no está definido.
En este caso estamos usando la directiva __ui-sref__ que permite navegar de un estado a otro utilizando el nombre del estado y no la ruta. No se está utilizando el atributo __url__ definido en la configuración del estado (stateConfig).

Agreguemos la plantilla de la lista de empleados y definamos el estado *empleados*.

{% highlight html linenos %}
<script id="states/empleados/empleados.html" type="text/ng-template">
  <ion-view view-title="Empleados">
    <ion-content class="padding">
      <div class="list">
        <div class="item item-divider item-assertive item-icon-left">
          <i class="icon ion-android-people"></i> 
          Nuestro talento
        </div>
        <a ng-href="#/empleado/ { { e.id } }" class="item" 
          ng-repeat="e in empleados">
          { { e.name } }
        </a>
      </div>
    </ion-content>
  </ion-view>
</script>
{% endhighlight %}

En el controlador debemos definir el estado y también la lógica del controlador.

{% highlight js linenos %}
.state('empleado', {
  url: '/empleado/:id',
  templateUrl: 'states/empleados/empleados.html',
  controller: 'emplController'
});
{% endhighlight %}

Y el controlador queda de la siguiente manera.

{% highlight js linenos %}
.controller('emplController', function($scope) {
  $scope.empleados = [
    { id: 1, name: "Geraldine Ganaim", cargo: "Ingeniero de Proyectos" },
    { id: 2, name: "Jonathan Duarte", cargo: "Ingeniero de Proyectos" },
    { id: 3, name: "David Prieto", cargo: "Ingeniero de Proyectos" },
    { id: 4, name: "María Rodríguez", cargo: "Ingeniero de Proyectos" }
  ];
})
{% endhighlight %}

Ahora nos corresponde hacer la pantalla para mostrar el detalle de cada empleado y la otra pantalla para la información de contacto. De forma análoga debemos, crear las plantillas, configurar los dos nuevos estados y crear los controladores. En cada controlador hay que colocar en el modelo (__$scope__) los datos que consume la vista. Agreguemos adicionalmente un botón en la pantalla de presentación para acceder a los datos de contacto.

{% highlight html linenos %}
<ion-nav-bar  class="bar-assertive">
<ion-nav-title>
  Padre
</ion-nav-title>
</ion-nav-bar>

<ion-nav-view>
</ion-nav-view>

<script id="states/pres/pres.html" type="text/ng-template">
  <ion-view view-title="Presentación">
    <ion-nav-title>
      Hijo!
    </ion-nav-title>
<ion-content class="padding">
  <h1>Presentación contenido</h1>
  <button ui-sref="empleados" class="button button-block">Ver el equipo de trabajo</button>
  <button ui-sref="contacto" class="button button-block">Ver datos de contacto</button>
</ion-content>
  </ion-view>
</script>

<script id="states/empleados/empleados.html" type="text/ng-template">
  <ion-view view-title="Empleados">
    <ion-content class="padding">
      <div class="list">
        <div class="item item-divider item-assertive item-icon-left">
          <i class="icon ion-android-people"></i> 
          Nuestro talento
        </div>
        <a ng-href="#/empleado/ { { e.id } }" class="item item-avatar" 
          ng-repeat="e in empleados">
          <img ng-src=" { { e.foto } }">
          {{e.nombre}}
        </a>
      </div>
    </ion-content>
  </ion-view>
</script>

<script id="states/detalle/detalle.html" type="text/ng-template">
  <ion-view view-title="Empleado">
    <ion-content class="padding">
      <div class="card">
        <div class="item item-assertive">
          { { empleado.id } }
        </div>
        <div class="item item-thumbnail">
          <img ng-src=" { { empleado.foto } }">
          {{empleado.nombre}}
        </div>
      </div>
    </ion-content>
  </ion-view>
</script>

<script id="states/contacto/contacto.html" type="text/ng-template">
  <ion-view>
    <ion-content class="padding">
      Datos de contacto
    </ion-content>
  </ion-view>
</script>
{% endhighlight %}

El *JS* debe quedar de la forma siguiente:

{% highlight js linenos %}
angular.module('app', ['ionic'])

.controller('presController', function($scope) {

})

.controller('emplController', function($scope, datoFactory) {
  $scope.empleados = datoFactory.empleados();
})

.controller('detaController', function($scope, datoFactory, $stateParams) {
  $scope.empleado = datoFactory.empleado($stateParams.id);
})

.controller('contController', function($scope) {
  $scope.contactInfo = {
    
  };
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('pres', {
      url: '/pres',
      templateUrl: 'states/pres/pres.html',
      controller: 'presController'
    })
    .state('empleados', {
      url: '/empleados',
      templateUrl: 'states/empleados/empleados.html',
      controller: 'emplController'
    })
    .state('detalle', {
      url: "/empleado/{id:int}",
      templateUrl: 'states/detalle/detalle.html',
      controller: 'detaController'
    })
    .state('contacto', {
      url: '/contacto',
      templateUrl: 'states/contacto/contacto.html',
      controller: 'contController'
    });
    
  $urlRouterProvider.otherwise('/pres');
})

.factory('datoFactory', function() {
  return {
    datos: [
    { 
      id: 1, 
      nombre: "Geraldine Ganaim", 
      cargo: "Ingeniero de Proyectos", 
      foto: "http://placehold.it/48x48"
    },
    { 
      id: 2, 
      nombre: "Jonathan Duarte", 
      cargo: "Ingeniero de Proyectos", 
      foto: "http://placehold.it/48x48"
    },
    { 
      id: 3, 
      nombre: "David Prieto", 
      cargo: "Ingeniero de Proyectos", 
      foto: "http://placehold.it/48x48"
    },
    { 
      id: 4, 
      nombre: "María Rodríguez", 
      cargo: "Ingeniero de Proyectos", 
      foto: "http://placehold.it/48x48"
    }
    ],
    empleados: function() {
      return this.datos;
    },
    empleado: function(id) {
      var i;
      for(i=0; i<this.datos.length;i++) {
        if (this.datos[i].id == id) {
          return this.datos[i];
        }
      }
      return {};
    }
  };
});
{% endhighlight %}

Si se dan cuenta en la aplicación no se puede navegar a la pantalla previa. Esto se hace de una manera muy sencilla en __ionic__ y además ofrecen algunas opciones de configuración.

{% highlight html linenos %}
<ion-nav-bar class="bar-positive">
 <ion-nav-back-button></ion-nav-back-button>
</ion-nav-bar>
{% endhighlight %}

Ahora después de navegar se puede ir al estado previo utilizando el botón superior a la izquierda.

Hemos configurado el título de forma estática. La verdad es que se puede colocar un título dinámico. Modifique una de las plantillas y agregue una expresión para colocar en el título el valor de la variable *titulo*.

{% highlight html linenos %}
<ion-view view-title="{{titulo}}">
{% endhighlight %}

Defina la variabla *titulo* en el controlador correspondiente.

{% highlight js linenos %}
  $scope.titulo = 'EL TITULO QUE DESEE COLOCAR';
{% endhighlight %}

Esta facilidad es útil cuando se desea colocar un título que proviene de los datos que se descargan.

Como nota aparte hay un servicio que provee __ionic__ denominado [__$ionicConfigProvider__][14]. Este servicio ofrece opciones de configuración en la aplicación que permite cambiar el comportamiento del botón de regreso (Back button). Se puede cambiar el ícono, el texto por defecto o si el título de la pantalla previa debería ser el texto del botón para regresar.

Si desea, puede ver el [resultado][4]. 

Adicionalmente pueden ver el ejemplo de la página de [__ionic__][2].

<style>
.phone {
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
  height: 578px;
  top: 114px;
  left: 37px;
}
</style>
<div>
  <div class="phone">
  <iframe id="cp_embed_odqCz" src="//codepen.io/ionic/embed/odqCz?height=568&amp;theme-id=3572&amp;slug-hash=odqCz&amp;default-tab=result&amp;user=ionic" scrolling="no" frameborder="0" height="578" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="embed_iframe" style="width: 100%; overflow: hidden;"></iframe>
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
[8]: http://ionicframework.com/docs/api/directive/ionNavBar/ "ion-nav-bar"
[9]: http://ionicframework.com/docs/api/directive/ionNavBackButton/ "ion-nav-back-button"
[10]: http://ionicframework.com/docs/api/directive/ionNavButtons/ "ion-nav-buttons"
[11]: http://ionicframework.com/docs/api/directive/ionNavTitle/ "ion-nav-title"
[12]: http://ionicframework.com/docs/api/directive/navTransition/ "nav-transition"
[13]: http://ionicframework.com/docs/api/directive/navDirection/ "nav-direction"
[14]: http://ionicframework.com/docs/api/provider/$ionicConfigProvider/ "$ionicConfigProvider"

