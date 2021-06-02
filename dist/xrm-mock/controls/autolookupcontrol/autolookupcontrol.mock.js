"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoLookupControlMock = void 0;
var standardcontrol_mock_1 = require("../standardcontrol/standardcontrol.mock");
var uikeypressable_mock_1 = require("../uikeypressable/uikeypressable.mock");
var AutoLookupControlMock = /** @class */ (function (_super) {
    __extends(AutoLookupControlMock, _super);
    function AutoLookupControlMock(components) {
        var _this = _super.call(this, components) || this;
        _this.uncommittedText = components.uncommittedText;
        _this.uiKeyPressable = new uikeypressable_mock_1.UiKeyPressableMock(components.keyPressHandlers);
        return _this;
    }
    AutoLookupControlMock.prototype.getValue = function () {
        return this.uncommittedText;
    };
    AutoLookupControlMock.prototype.hideAutoComplete = function () {
        throw new Error(("hide autocomplete not implemented"));
    };
    AutoLookupControlMock.prototype.showAutoComplete = function (resultSet) {
        throw new Error(("show autocomplete not implemented"));
    };
    AutoLookupControlMock.prototype.addOnKeyPress = function (handler) {
        this.uiKeyPressable.addOnKeyPress(handler);
    };
    AutoLookupControlMock.prototype.fireOnKeyPress = function () {
        this.uiKeyPressable.fireOnKeyPress();
    };
    AutoLookupControlMock.prototype.removeOnKeyPress = function (handler) {
        this.uiKeyPressable.removeOnKeyPress(handler);
    };
    return AutoLookupControlMock;
}(standardcontrol_mock_1.StandardControlMock));
exports.AutoLookupControlMock = AutoLookupControlMock;
//# sourceMappingURL=autolookupcontrol.mock.js.map