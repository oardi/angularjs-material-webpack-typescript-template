class SettingsCtrl {
    constructor(
        private $rootScope: ng.IRootScopeService
    ) {
    }

    $onInit() {
    }

    theme = "blue";
    themes = ["blue", "green"];

    updateTheme() {
        console.warn("update theme");
        this.$rootScope.$broadcast("update-theme", this.theme);
    }
}

SettingsCtrl.$inject = ["$rootScope"];

export default {
    bindings: {},
    templateUrl: require("./settings.html"),
    controller: SettingsCtrl
}