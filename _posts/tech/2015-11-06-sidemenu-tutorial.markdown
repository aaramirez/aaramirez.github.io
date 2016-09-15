---
title: Tutorial con menú lateral (ion-side-menus)
date: 2015-11-06 08:00:00 Z
categories:
- desarrollo
- ionic
- angularjs
comments: true
---

En las aplicaciones móviles hay un patrón de navegación muy común que es mediate menú laterales que se activan con algún botón en la barra superior.

[__ionic__][4] proporciona la directiva [__ion-side-menus__][5] que viene acompañada por otras directivas como:

- [__ion-side-menus__][5] - Contenedor principal del menú y su contenido. Padre de [__ion-side-menu-content__][6] y [__ion-side-menu__][7].
- [__ion-side-menu-content__][6] - Es el contenedor principal donde se especifican los elementos de contenido a los cuales se podría navegar a través del menú.
- [__ion-side-menu__][7] - Es el menú en sí mismo. Se comporta como un [__ion-view__][11] ya que tiene la misma estructura interna. Es decir, puede contener un [__ion-header-bar__][14], [__ion-content__][16] y un [__ion-footer-bar__][15] entre otros. Es decir es una vista que se utiliza para mostrar el menú.
- [__expose-aside-when__][8] - Se utiliza para cambiar el comportamiento del menú en formatos (dispositivos) con pantalla más grande como los tablets.
- [__menu-toggle__][9] - Activa el menú lateral. Se utiliza en botones que activan el menú usualmente en la barra de navegación.
- [__menu-close__][10] - Cierra el menú lateral. Se utiliza en los elementos del menú para cerrarlos una vez escogida una opción.

El ejemplo sólo tiene la complejidad de entender la estructura de la aplicación utilizando estas directivas. Podríamos verlo de forma visual.

<pre>
.
+-- ion-nav-bar
|   |
|   +-- ion-nav-back-button
|   |
|   +-- ion-nav-buttons
|   |
|   +-- ion-nav-title
|
+-- ion-nav-view
    |
    +-- ion-tabs
    |   |
    |   +-- ion-tab
    |       |
    |       +-- ion-nav-view (named)
    |           |
    |           +-- ion-view
    |
    +-- ion-view
    |   |
    |   +-- ion-nav-buttons
    |   |
    |   +-- ion-nav-title
    |   |
    |   +-- ion-header-bar
    |   |
    |   +-- div class="sub-header"
    |   |
    |   +-- ion-footer-bar
    |   |
    |   +-- div class="sub-footer"
    |   |
    |   +-- ion-content
    |
    +-- ion-pane
    |
    +-- ion-side-menus
        |
        +-- ion-side-menu-content
        |   |
        |   +-- ion-nav-bar
        |   |   |
        |   |   +-- ion-nav-back-button
        |   |   | 
        |   |   +-- ion-nav-buttons
        |   |
        |   +-- ion-nav-view (named)
        |       |
        |       +-- ion-view
        |           |
        |           +-- ion-nav-buttons
        |           |
        |           +-- ion-nav-title
        |           |
        |           +-- ion-content
        |
        +-- ion-side-menu (side={left|right})
            |
            +-- ion-header-bar
            |
            +-- ion-content
            |
            +-- ion-footer-bar
</pre>

Ingrese a [play.ionic.io][1] para obtener el código para iniciar el tutorial y haga FORK. __No olvide hacer FORK__.

  > El objetivo es:

  > - Crear una aplicación con múltiples páginas (o vistas) y con navegación a través de un menú lateral.
  > - Crear el menú y el resto de las vistas.
  > - Definir los estados de la aplicación.
  > - Definir los controladores.

Estamos partiendo de una aplicación sin nada.

Primero definamos nuestro contenedor principal con la directiva [__ion-nav-view__] y luego nuestra primera plantilla *menu.html*. Dentro de nuestra plantilla hay que definir el contenedor del menú [__ion-side-menus__][5]. Este contenedor cuenta con dos directivas hijas [__ion-side-menu-content__][6] y [__ion-side-menu__][7]. [__ion-side-menu-content__][6] puede tener dos hermanas (siblings) del tipo [__ion-side-menu__][7] que pueden colocarse a la derecha o a la izquierda.

{% highlight html %}
<ion-nav-view>
</ion-nav-view>

<script id="templates/menu.html" type="text/ng-template">
  <ion-side-menus>
    <ion-side-menu-content>
     
    </ion-side-menu-content>
    
    <ion-side-menu side="left">
      
    </ion-side-menu>
  </ion-side-menus>
</script>
{% endhighlight %}

Ahora dentro del [__ion-side-menu-content__][6] definamos una barra de navegación con sus botones y la vista de navegación que servirá para desplegar las vistas. Esta vista de navegación [__ion-nav-view__][12] es la que se utiliza en cada plantilla para desplegar contenido.

{% highlight html  %}
<script id="templates/menu.html" type="text/ng-template">
  <ion-side-menus>
    <ion-side-menu-content>
      <ion-nav-bar class="bar-assertive">
        <ion-nav-buttons side="left">
 
        </ion-nav-buttons>
      </ion-nav-bar>
      <ion-nav-view name="menuContent">
      </ion-nav-view>
    </ion-side-menu-content>
    
    <ion-side-menu side="left">

    </ion-side-menu>
  </ion-side-menus>
</script>
{% endhighlight %}

Completemos la barra de navegación incluyendo el botón para navegar al estado previo [__ion-nav-back-button__][13] y agreguemos el botón que va a activar el menú. Ese botón que activa el menú debe utilizar la directiva [__menu-toggle__][9] que es la que activa el menú del lado que se indique. Esta directiva se coloca en un link o un botón.

{% highlight html  %}
<script id="templates/menu.html" type="text/ng-template">
  <ion-side-menus>
    <ion-side-menu-content>
      <ion-nav-bar class="bar-assertive">
        <ion-nav-back-button>
        </ion-nav-back-button>
        <ion-nav-buttons side="left">
          <button class="button button-icon button-clear ion-navicon"
            menu-toggle="left">
          </button>
        </ion-nav-buttons>
      </ion-nav-bar>
      <ion-nav-view name="menuContent">
      </ion-nav-view>
    </ion-side-menu-content>
    
    <ion-side-menu side="left">

    </ion-side-menu>
  </ion-side-menus>
</script>
{% endhighlight %}

Ahora vamos a definir el contenido del menú. Este menú es un contenedor que permite definir un [__ion-header-bar__][14], [__ion-footer-bar__][15] y [__ion-content__][16]. También se podría definir un sub-footer o sub-header. Es una plantilla contenedora que se puede generar dinámicamente utilizando el controlador del menú. Defina una lista con tres elementos que nos permitan navegar a las tres vistas que vamos a crear. Fíjese en el uso de la directiva [__menu-close__][10]. Sin ella el menú no se cierra solo. Esta se debe usar en cada elemento del menú.

{% highlight html  %}
<script id="templates/menu.html" type="text/ng-template">
  <ion-side-menus>
    <ion-side-menu-content>
      <ion-nav-bar class="bar-assertive">
        <ion-nav-back-button>
        </ion-nav-back-button>
        <ion-nav-buttons side="left">
          <button class="button button-icon button-clear ion-navicon"
            menu-toggle="left">
          </button>
        </ion-nav-buttons>
      </ion-nav-bar>
      <ion-nav-view name="menuContent">
      </ion-nav-view>
    </ion-side-menu-content>
    
    <ion-side-menu side="left">
      <ion-header-bar class="bar-assertive">
        <h1 class="title">Top</h1>
      </ion-header-bar>
      <ion-content>
        <ion-list>
          <ion-item menu-close href="#/app/presenta">
            Presentación
          </ion-item>
          <ion-item menu-close href="#/app/empleados">
            Empleados
          </ion-item>
          <ion-item menu-close href="#/app/contacto">
            Contacto
          </ion-item>
        </ion-list>
      </ion-content>
      <ion-footer-bar class="bar-stable">
        <h1 class="title">Bottom</h1>
      </ion-footer-bar>
    </ion-side-menu>
  </ion-side-menus>
</script>
{% endhighlight %}

Ahora vamos a crear las plantillas de las tres vistas que vamos a utilizar de la manera usual.

{% highlight html  %}
<script id="templates/presenta.html" type="text/ng-template">
  <ion-view view-title="Presentación">
    <ion-content>
      <h1>Aquí presentamos</h1>
    </ion-content>
  </ion-view>
</script>

<script id="templates/empleados.html" type="text/ng-template">
  <ion-view view-title="Empleados">
    <ion-content>
      <h1>Empleados</h1>
    </ion-content>
  </ion-view>
</script>

<script id="templates/contacto.html" type="text/ng-template">
  <ion-view view-title="Contacto">
    <ion-content>
      <h1>Contacto</h1>
    </ion-content>
  </ion-view>
</script>
{% endhighlight %}

Vamos al modulo principal y definamos los estados y los controladores respectivos. Esto se hace con la rutina __.config__. Primero se define el estado principal o padre que es donde está el menú. Esto lo que significa es que todos los estados (en esta aplicación) van a ser hijos de este principal. Hay que utilizar el atributo __abstract__ para indicar que no es un estado al que se navega directamente sino que es un padre. Luego definamos 

{% highlight js  %}
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'appController'
    });
});
{% endhighlight %}

Como puede ver todavía no aparece nada en pantalla. Ahora definamos el resto de los estados y mediante el servicio [__$urlRouterProvider__][18] indiquemos cual es la pantalla por defecto. Revise también la documentación de [__$stateProvider__][17] como referencia.

{% highlight js  %}
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'appController'
    })
    .state('app.presenta', {
      url: "/presenta",
      views: {
        'menuContent': {
          templateUrl: "templates/presenta.html",
          controller: "presentaController"
        }
      }
    })
    .state('app.empleados', {
      url: "/empleados",
      views: {
        'menuContent': {
          templateUrl: "templates/empleados.html",
          controller: "empleadosController"
        }
      }
    })
    .state('app.contacto', {
      url: "/contacto",
      views: {
        'menuContent': {
          templateUrl: "templates/contacto.html",
          controller: 'contactoController'
        }
      }
    });
    
    $urlRouterProvider.otherwise('/app/presenta');
});
{% endhighlight %}

Ahora definamos los controladores respectivos.

{% highlight js  %}
.controller('appController', function($scope) {
})  

.controller('presentaController', function($scope) {
})

.controller('empleadosController', function($scope) {
})

.controller('contactoController', function($scope) {
})
{% endhighlight %}

Ya debe ver una aplicación que se puede navegar a los diferentes estados.

Para darle un poco de más funcionalidad vamos a agregar una lista de empleados en la plantilla de empleados y vamos a crear una nueva plantilla para ver la información específica de un empleado.

Tenemos que crear un estado nuevo y un controlador nuevo para la plantilla de información específica de un empleado. La particularidad de este estado es que en el __url__ podemos indicar que se reciben parámetros que luego vamos a utilizar en el controlador y en la vista.

{% highlight js  %}
.state('app.empleado', {
  url: "/empleado/{id:int}",
  views: {
    'menuContent': {
      templateUrl: "templates/empleado.html",
      controller: 'empleadoController'
    }
  }
})
{% endhighlight %}

Ahora vamos a definir la vista nueva y modificamos la de *Empleados* para crear una lista de empleados y cambiar de estado con [__ui-sref__][19] y el parámetro respectivo.

{% highlight html  %}
<script id="templates/empleados.html" type="text/ng-template">
  <ion-view view-title="Empleados">
    <ion-content>
      <ion-list>
        <ion-item ui-sref="app.empleado({id:1})">
          Empleado del mes
        </ion-item>
        <ion-item ui-sref="app.empleado({id:2})">
          Otro empleado
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-view>
</script>
{% endhighlight %}

Ahora vamos a crear la vista nueva de *Empleado* y mostremos el parámetro que nos envió la pantalla de *Empleados*.

{% highlight html  %}
<script id="templates/empleado.html" type="text/ng-template">
  <ion-view view-title="Empleado">
    <ion-content>
      <h1>Empleado { { id } }</h1>
    </ion-content>
  </ion-view>
</script>
{% endhighlight %}

Este es un flujo muy usual para manejar parámetros a las pantallas siguientes y generar un tipo de comunicación entre las vistas.

Como se puede dar cuenta todavía falta algo. Eso es el controlador de la nueva pantalla que es el que toma el parámetro que envió la pantalla anterior y define en el modelo el que va a consumir la vista. Los parámetros son accesibles a través de [__$stateParams__][20].

{% highlight js  %}
.controller('empleadoController', function($scope, $stateParams) {
  $scope.id = $stateParams.id;
})
{% endhighlight %}

Ya tenemos la aplicación completamente funcional.

Si desea, puede ver el [resultado][2]. Hicimos [otro ejemplo][3] un poco más funcional. Otro ejemplo donde [el menú está gestionado por el padre][21]. Otro ejemplo donde [juntamos menú lateral y tabs][22].

Veamos el resultado.

<style>
.phone {
  position: relative;
  z-index: 1;
  width: 380px;
  height: 810px;
  background: url("/img/phone.png") no-repeat right top;
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
  <iframe height='578' scrolling='no' src='//codepen.io/aaramirez/embed/KdrgYQ/?height=578&theme-id=20842&default-tab=result' frameborder='1px' allowtransparency='true' allowfullscreen='true' style="width: 100%; overflow: hidden;" class="embed_iframe">See the Pen <a href='http://codepen.io/aaramirez/pen/KdrgYQ/'>Tutorial - uso de menú lateral</a> by Alexander A. Ramírez M. (<a href='http://codepen.io/aaramirez'>@aaramirez</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
  </div>
</div>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

[1]: http://play.ionic.io/app/528e2a0aa18f "Inicio del tutorial"
[2]: http://play.ionic.io/app/6e861bffb2e8 "Resultado del tutorial"
[3]: http://play.ionic.io/app/72629b9f4038 "Otro ejemplo con un poco de sal"
[4]: http://ionicframework.com "ionic Framework"
[5]: http://ionicframework.com/docs/api/directive/ionSideMenus/ "ion-side-menus"
[6]: http://ionicframework.com/docs/api/directive/ionSideMenuContent/ "ion-side-menu-content"
[7]: http://ionicframework.com/docs/api/directive/ionSideMenu/ "ion-side-menu"
[8]: http://ionicframework.com/docs/api/directive/exposeAsideWhen/ "expose-aside-when"
[9]: http://ionicframework.com/docs/api/directive/menuToggle/ "menu-toggle"
[10]: http://ionicframework.com/docs/api/directive/menuClose/ "menu-close"
[11]: http://ionicframework.com/docs/api/directive/ionView/ "ion-view"
[12]: http://ionicframework.com/docs/api/directive/ionNavView/ "ion-nav-view"
[13]: http://ionicframework.com/docs/api/directive/ionNavBackButton/ "ion-nav-back-button"
[14]: http://ionicframework.com/docs/api/directive/ionHeaderBar/ "ion-header-bar"
[15]: http://ionicframework.com/docs/api/directive/ionFooterBar/ "ion-footer-bar"
[16]: http://ionicframework.com/docs/api/directive/ionContent/ "ion-content"
[17]: http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider "$stateProvider"
[18]: http://angular-ui.github.io/ui-router/site/#/api/ui.router.router.$urlRouterProvider "$urlRouterProvider"
[19]: http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref "ui-sref"
[20]: https://github.com/angular-ui/ui-router/wiki/URL-Routing#stateparams-service "$stateParams"
[21]: http://play.ionic.io/app/96905135d65a "Menú gestionado por el padre"
[22]: http://play.ionic.io/app/ada0854acdff "Menú lateral y tabs"
