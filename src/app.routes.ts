import * as angular from 'angular';

export default function routes($routeProvider) {
    //$routeProvider.when('/', { template: "<test></test>" }); in home
    $routeProvider.otherwise('/');
}
routes.$inject = ['$routeProvider'];