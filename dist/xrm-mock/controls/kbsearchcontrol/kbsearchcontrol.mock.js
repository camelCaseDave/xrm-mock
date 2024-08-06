"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.KbSearchControlMock = void 0;
var control_mock_1 = require("../control/control.mock");
var KbSearchControlMock = /** @class */ (function (_super) {
    __extends(KbSearchControlMock, _super);
    function KbSearchControlMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KbSearchControlMock.prototype.addOnPostSearch = function (handler) {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.addOnResultOpened = function (handler) {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.addOnSelection = function (handler) {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.getDisabled = function () {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.getSearchQuery = function () {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.getSelectedResults = function () {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.getTotalResultCount = function () {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.openSearchResult = function (resultNumber, mode) {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.removeOnPostSearch = function (handler) {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.removeOnResultOpened = function (handler) {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.removeOnSelection = function (handler) {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.setFocus = function () {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.setSearchQuery = function (searchString) {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.setVisible = function (visible) {
        throw new Error("Method not implemented.");
    };
    KbSearchControlMock.prototype.setDisabled = function (value) {
        throw new Error("Method not implemented.");
    };
    return KbSearchControlMock;
}(control_mock_1.ControlMock));
exports.KbSearchControlMock = KbSearchControlMock;
//# sourceMappingURL=kbsearchcontrol.mock.js.map