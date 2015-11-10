---
title: "Tutorial con menú lateral (ion-side-menus)"	
date: 2015-11-06 08:00:00
categories: ionic angularjs cordova tutorial
---

En las aplicaciones móviles hay un patrón de navegación muy común que es mediate menú laterales que se activan con algún botón en la barra superior.

[__ionic__][] proporciona la directiva [__ion-side-menus__][] que viene acompañada por otras directivas como:

- [__ion-side-menus__][]
- [__ion-side-menu-content__][] - Es el contenedor principal donde se especifican los elementos de contenido a los cuales se podría navegar a través del menú.
- [__ion-side-menu__][] - Es el menú en sí mismo. Se comporta como un [__ion-view__][] ya que tiene la misma estructura interna. Es decir, puede contener un __ion-header-bar__, __ion-content__ y un __ion-footer-bar__ entre otros. Es decir es una vista que se utiliza para mostrar el menú.
- [__expose-aside-when__][]
- [__menu-toggle__][]
- [__menu-close__][]

El ejemplo sólo tiene la complejidad de entender la estructura de la aplicación utilizando estas directivas. Podríamos verlo de forma jerarquica...



````
.
+-- ion-nav-view
	|
	+-- ion-view
	|	|
	|	+-- ion-content
	|
	+-- ion-pane
	|
   	+-- ion-side-menus
   		|
   		+-- ion-side-menu-content
   		|	|
		|	+-- ion-nav-bar
		|	|	|
		|	|	+-- ion-nav-bar-button
		|	|	|	|
		|	|	|	+-- ion-nav-back-button
		|	|	|	
		|	|	+-- ion-nav-buttons
		|	|	|
		|	+-- ion-nav-view
		|		|
		|		+-- ion-view
		|			|
		|			+-- ion-content
		|
		+-- ion-side-menu (side={left|right})
			|
			+-- ion-header-bar
			|
			+-- ion-content
			|
			+-- ion-footer-bar
````




















[1]: http://play.ionic.io/app/528e2a0aa18f "Inicio del tutorial"
[2]: http://play.ionic.io/app/6e861bffb2e8 "Resultado del tutorial"
[3]: http://play.ionic.io/app/72629b9f4038 "Otro ejemplo con un poco de sal"