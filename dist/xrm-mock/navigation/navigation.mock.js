"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationStaticMock = void 0;
var NavigationStaticMock = /** @class */ (function () {
    function NavigationStaticMock() {
        this.notImplementedError = "Navigation methods not implemented. Consider stubbing calls using a tool such as Sinon.JS";
    }
    NavigationStaticMock.prototype.navigateTo = function (pageInput, navigationOptions) {
        throw new Error(this.notImplementedError);
    };
    NavigationStaticMock.prototype.openAlertDialog = function (alertStrings, alertOptions) {
        throw new Error(this.notImplementedError);
    };
    NavigationStaticMock.prototype.openConfirmDialog = function (param) {
        throw new Error(this.notImplementedError);
    };
    NavigationStaticMock.prototype.openErrorDialog = function (errorOptions) {
        throw new Error(this.notImplementedError);
    };
    NavigationStaticMock.prototype.openFile = function (file, openFileOptions) {
        throw new Error(this.notImplementedError);
    };
    NavigationStaticMock.prototype.openForm = function (entityFormOptions, formParameters) {
        throw new Error(this.notImplementedError);
    };
    NavigationStaticMock.prototype.openUrl = function (url, openUrlOptions) {
        throw new Error(this.notImplementedError);
    };
    NavigationStaticMock.prototype.openWebResource = function (webResourceName, windowOptions, data) {
        throw new Error(this.notImplementedError);
    };
    return NavigationStaticMock;
}());
exports.NavigationStaticMock = NavigationStaticMock;
//# sourceMappingURL=navigation.mock.js.map