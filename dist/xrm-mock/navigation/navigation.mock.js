"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationStaticMock = void 0;
var xrmpromise_mock_1 = require("../async/xrmpromise/xrmpromise.mock");
var NavigationStaticMock = /** @class */ (function () {
    function NavigationStaticMock() {
        this.returnValueNotImplemented = "Return value not implemented!";
        this.alertDialogCalls = [];
        this.confirmDialogCalls = [];
        this.errorDialogCalls = [];
        this.fileDialogCalls = [];
        this.formCalls = [];
        this.navigateToCalls = [];
        this.urlCalls = [];
        this.webResourceCalls = [];
    }
    NavigationStaticMock.prototype.navigateTo = function (pageInput, navigationOptions) {
        var _this = this;
        return xrmpromise_mock_1.XrmPromiseMock.delay(function () {
            _this.navigateToCalls.push({ pageInput: pageInput, navigationOptions: navigationOptions });
            return _this.returnValueNotImplemented;
        });
    };
    NavigationStaticMock.prototype.openAlertDialog = function (alertStrings, alertOptions) {
        var _this = this;
        return xrmpromise_mock_1.XrmPromiseMock.delayVoid(function () {
            _this.alertDialogCalls.push({ alertStrings: alertStrings, alertOptions: alertOptions });
        });
    };
    NavigationStaticMock.prototype.openConfirmDialog = function (confirmStrings, confirmOptions) {
        var _this = this;
        return xrmpromise_mock_1.XrmPromiseMock.delay(function () {
            _this.confirmDialogCalls.push({ confirmStrings: confirmStrings, confirmOptions: confirmOptions });
            return { confirmed: true };
        });
    };
    NavigationStaticMock.prototype.openErrorDialog = function (errorOptions) {
        var _this = this;
        return xrmpromise_mock_1.XrmPromiseMock.delay(function () {
            _this.errorDialogCalls.push({ errorOptions: errorOptions });
            return _this.returnValueNotImplemented;
        });
    };
    NavigationStaticMock.prototype.openFile = function (file, openFileOptions) {
        this.fileDialogCalls.push({ file: file, openFileOptions: openFileOptions });
    };
    NavigationStaticMock.prototype.openForm = function (entityFormOptions, formParameters) {
        var _this = this;
        return xrmpromise_mock_1.XrmPromiseMock.delay(function () {
            _this.formCalls.push({ entityFormOptions: entityFormOptions, formParameters: formParameters });
            return _this.returnValueNotImplemented;
        });
    };
    NavigationStaticMock.prototype.openUrl = function (url, openUrlOptions) {
        this.urlCalls.push({ url: url, openUrlOptions: openUrlOptions });
    };
    NavigationStaticMock.prototype.openWebResource = function (webResourceName, windowOptions, data) {
        this.webResourceCalls.push({ webResourceName: webResourceName, windowOptions: windowOptions, data: data });
    };
    return NavigationStaticMock;
}());
exports.NavigationStaticMock = NavigationStaticMock;
//# sourceMappingURL=navigation.mock.js.map