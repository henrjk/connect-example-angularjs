import 'connect-js/anvil-connect-angular'
import 'angular-animate'
import 'angular-cookies'
import 'angular-resource'
import 'angular-route'
import 'angular-sanitize'
import 'angular-touch'

/**
 * Anvil Connect AngularJS Example App
 */

angular
  .module('AnvilConnectClient', [
    'anvil',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'anvil'
  ])

  .config(function ($locationProvider, $routeProvider, AnvilProvider) {

    // CONFIGURE ANVIL CONNECT
    AnvilProvider.configure({
      issuer:       '<%=AUTH_SERVER%>',
      client_id:    '<%=CLIENT_ID%>',
      //redirect_uri: 'http://localhost:9000/callback.html',
      redirect_uri: '<%=APP_SERVER%>/<%=APP_AUTH_CALLBACK%>',
      display:      '<%=AUTH_DISPLAY%>' // ,
      // scope:        'realm email'
    });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix = '!';

    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })

      .when('/requires/authentication', {
        templateUrl: '/views/requiresAuthentication.html',
        controller: 'RequiresAuthenticationCtrl',
        resolve: {
          session: AnvilProvider.requireAuthentication
        }
      })

      .when('/requires/scope', {
        templateUrl: '/views/requiresScope.html',
        controller: 'RequiresScopeCtrl',
        resolve: {
          session: AnvilProvider.requireScope('profile', '/unauthorized')
        }
      })

      .when('/unauthorized', {
        templateUrl: '/views/unauthorized.html',
        controller: 'UnauthorizedCtrl'
      })

      // HANDLE CALLBACK (REQUIRED BY FULL PAGE NAVIGATION ONLY)
      .when('/<%= APP_AUTH_CALLBACK %>', {
        resolve: {
          session: function ($location, Anvil) {
            if ($location.hash()) {
              Anvil.authorize().then(

                // handle successful authorization
                function (response) {
                  $location.url(localStorage['anvil.connect.destination'] || '/');
                  delete localStorage['anvil.connect.destination']
                },

                // handle failed authorization
                function (fault) {
                  // ...
                }

              );
            } else {
              $location.url(localStorage['anvil.connect.destination'] || '/');
              delete localStorage['anvil.connect.destination']
            }
          }
        }
      })

      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('SigninCtrl', function ($scope, Anvil) {

    $scope.session = Anvil.session;

    $scope.signin = function () {
      Anvil.authorize()
      Anvil.once('authenticated', function () {
        $scope.$apply();
      })
    };

    $scope.signout = function () {
      Anvil.signout('/');
    };

    $scope.$watch(
      // proper formatting allows easier setting of breakpoints.
      function () {
        return Anvil.session
      },
      function (newVal) {
        $scope.session = newVal
      },
      true
    );

  })

  .controller('MainCtrl', function ($scope, Anvil) {
    $scope.session = Anvil.session
  })

  .controller('RequiresAuthenticationCtrl', function ($scope, session) {
    $scope.session = session;
  })

  .controller('RequiresScopeCtrl', function ($scope, session) {
    $scope.session = session;
  })

  .controller('UnauthorizedCtrl', function ($scope) {
    $scope.scope = '?';
  })

  ;
