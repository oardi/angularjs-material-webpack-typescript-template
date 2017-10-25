import * as angular from 'angular';
import * as ngRoute from 'angular-route';
import * as ngAnimate from 'angular-animate';
import * as ngAria from 'angular-aria';
import * as ngMaterial from 'angular-material';
import 'angular-material/angular-material.scss';
import 'hammerjs';
import * as hmTouchEvents from 'angular-hammer';

import './assets/style.scss';

import routes from './app.routes';
import mainModule from './app/main/main.module';
import settingsModule from './app/settings/settings.module';
import homeModule from './app/home/home.module';

angular.module("app", [ngRoute, ngAnimate, ngAria, ngMaterial, hmTouchEvents, mainModule, settingsModule, homeModule]);
angular.module("app").config(routes);

angular.module("app").config(["$mdThemingProvider", function ($mdThemingProvider) {
    $mdThemingProvider.theme("blue")
        .primaryPalette("blue")
        .accentPalette("red");

    $mdThemingProvider.theme("green")
        .primaryPalette("teal")
        .accentPalette("red");

    $mdThemingProvider.alwaysWatchTheme(true);
}]);

//https://docs.angularjs.org/guide/production
angular.module("app").config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
}]);

angular.bootstrap(document, ["app"]);

//https://github.com/vsternbach/angularjs-typescript-webpack
//http://ryanmullins.github.io/angular-hammer/