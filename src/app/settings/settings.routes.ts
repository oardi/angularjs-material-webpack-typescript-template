import * as angular from 'angular';

export default function routes($routeProvider) {
    $routeProvider.when('/settings', { template: "<settings></settings>" });
}
routes.$inject = ['$routeProvider'];