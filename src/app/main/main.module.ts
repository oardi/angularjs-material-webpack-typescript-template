import * as angular from 'angular';
import mainComponent from './main';

export default angular.module('main', [])
    .component("main", mainComponent)
    .name; 