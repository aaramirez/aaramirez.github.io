---
title: Uso de promesas en un servicio (factory)
date: 2015-11-18 08:00:00 Z
categories:
- desarrollo
- ionic
- angularjs
comments: true
---

En muchos casos es necesario acceder información de forma asíncrona. Hoy en día es posible hacer este trabajo mediante el uso de las promesas (promises).

Las promesas permiten definir servicios que no devuelven información inmediatamente y que se resuelven luego. Durante el flujo de la aplicación la promesa sirve para mandar a ejecutar una actividad y manejar su flujo luego que retorna, sin esperar por el resultado. Es decir, sigue la ejecución de la aplicación y cuando se resuelve la promesa (ya sea con éxito o error) entonces se ejecutan las acciones que dependen de la promesa.

Vamos a dar un ejemplo del uso de las promesas a través de un servicio (factory) para descargar información de Yahoo Finance.

Primero debemos declarar nuestro servicio (factory), denominado getYahooData, mediante el método __factory__ en nuestro módulo de AngularJS. Adicionalmente debemos declarar el uso del servicio en nuestro controlador. En el servicio debemos inyectar [__$q__][2] y [__$http__][3]. El primero es para definir promesas y manejarlas y el segundo para acceder datos.

{% highlight javascript %}
angular.module('app', ['ionic'])

.controller('appController', function($scope, getYahooData) {

})

.factory('getYahooData', function($q, $http) {

});
{% endhighlight %}

Ahora vamos a definir el método getTickerData. En el método declaremos la variable que vamos a usar para la promesa (deferred) y utilice el servicio __$http__ para acceder a los datos de acuerdo al ejemplo previo en el blog. Les dejo la estructura típica como referencia. Básicamente el servicio __$http__ también devuelve una promesa y se puede utilizar el método __success__ y __error__ de la promesa. Cada uno de esos métodos devuelve los datos si es exitoso o el error.

{% highlight javascript  %}
angular.module('app', ['ionic'])

.controller('appController', function($scope, getYahooData) {

})

.factory('getYahooData', function($q, $http) {
  
  var getTickerData = function(ticker) {
    var deferred = $q.defer();

    var url = 'http://finance.yahoo.com/webservice/v1/symbols/'+ ticker +'/quote?format=json&view=detail';

    $http.get(url)
      .success(function(json) {

      })
      .error(function(error){

      });

    return deferred.promise;
  };

});
{% endhighlight %}

Ahora defina lo que va a retornar el servicio, que es un objeto con la lista de métodos que se desean exponer en el servicio. El servicio debe retornar una estructura como esta siempre.

{% highlight javascript  %}
angular.module('app', ['ionic'])

.controller('appController', function($scope, getYahooData) {

})

.factory('getYahooData', function($q, $http) {
  
  var getTickerData = function(ticker) {
    var deferred = $q.defer();

    var url = 'http://finance.yahoo.com/webservice/v1/symbols/'+ ticker +'/quote?format=json&view=detail';

    $http.get(url)
      .success(function(json) {

      })
      .error(function(error){

      });

    return deferred.promise;
  };

  return {
    getTickerData: getTickerData
  };
});
{% endhighlight %}

Ahora vamos a implementar los métodos __success__ y __error__ utilizando los métodos __resolve__ y __reject__. Adicionalmente el método __getTickerData__ debe retornar la promesa.

{% highlight javascript  %}
angular.module('app', ['ionic'])

.controller('appController', function($scope, getYahooData) {

})

.factory('getYahooData', function($q, $http) {
  
  var getTickerData = function(ticker) {
    var deferred = $q.defer();
    var url = 'http://finance.yahoo.com/webservice/v1/symbols/'+ ticker +'/quote?format=json&view=detail';
    $http.get(url)
      .success(function(json) {
        console.log(json);
        var data = json.list.resources[0].resource.fields;
        deferred.resolve(data);
      })
      .error(function(error){
        console.log('getTickerData error ' + error);
        deferred.reject();
      });
    return deferred.promise;
  };

  return {
    getTickerData: getTickerData
  };
});
{% endhighlight %}

Ahora implemente el controlador, manejando la promesa y tomando el resultado utilizando el método __then__. Debe enviar el parámetro que espera el método y colocar en el modelo la información que viene del servicio.

{% highlight javascript  %}
angular.module('app', ['ionic'])

.controller('appController', function($scope, getYahooData) {
  var promise = getYahooData.getTickerData('AAPL');
  promise.then(function(data) {
    $scope.tickerData = data;
  });
})

.factory('getYahooData', function($q, $http) {
  
  var getTickerData = function(ticker) {
    var deferred = $q.defer();
    var url = 'http://finance.yahoo.com/webservice/v1/symbols/'+ ticker +'/quote?format=json&view=detail';
    $http.get(url)
      .success(function(json) {
        console.log(json);
        var data = json.list.resources[0].resource.fields;
        deferred.resolve(data);
      })
      .error(function(error){
        console.log('getTickerData error ' + error);
        deferred.reject();
      });
    return deferred.promise;
  };

  return {
    getTickerData: getTickerData
  };
});
{% endhighlight %}

Ahora ya cuenta con la estructura básica para manejar servicios con promesas. Esta es una herramienta muy importante para las aplicaciones web que obtienen sus datos principalmente de la nube y la mejor manera de utilizarlo es de forma asíncrona.

Como ejercicio defina un servicio para obtener datos sin acoplarlo a Yahoo Finance.

Espero les sirva. Les dejo el [ejemplo en play.ionic.io][1].

Nota: Si leen la documentación se darán cuenta que los métodos __success__ y __error__ de [__$http__][3] ya están obsoletos. Así que el ejemplo sirve sólo para ilustrar el uso de [__$q__][2].

[1]: http://play.ionic.io/app/428bc43d928d "Fuentes del ejemplo"
[2]: https://docs.angularjs.org/api/ng/service/$q "$q"
[3]: https://docs.angularjs.org/api/ng/service/$http "$http"