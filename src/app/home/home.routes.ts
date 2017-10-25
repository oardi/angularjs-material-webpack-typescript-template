import * as angular from 'angular';

export default function routes($routeProvider) {
    $routeProvider.when('/', { template: "<home></home>" });
}
routes.$inject = ['$routeProvider'];