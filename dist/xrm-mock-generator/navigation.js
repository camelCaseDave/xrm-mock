"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var Navigation = /** @class */ (function () {
    function Navigation() {
    }
    Navigation.createNavigation = function (client) {
        var navigation = new XrmMock.NavigationStaticMock();
        return navigation;
    };
    return Navigation;
}());
exports.default = Navigation;
//# sourceMappingURL=navigation.js.map