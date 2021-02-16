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
exports.GridControlMock = void 0;
var control_mock_1 = require("../control/control.mock");
var GridControlMock = /** @class */ (function (_super) {
    __extends(GridControlMock, _super);
    function GridControlMock(components) {
        var _this = _super.call(this, GridControlMock.defaultComponents(components)) || this;
        _this.contextType = components.contextType;
        _this.entityName = components.entityName;
        _this.onLoadHandlers = components.onLoadHandlers;
        _this.viewSelector = components.viewSelector;
        _this.grid = components.grid;
        _this.relationship = components.relationship;
        return _this;
    }
    GridControlMock.defaultComponents = function (components) {
        components.controlType = "subgrid";
        components.contextType = components.contextType || 4;
        components.entityName = components.entityName || "contact";
        components.onLoadHandlers = components.onLoadHandlers || [];
        return components;
    };
    GridControlMock.prototype.refreshRibbon = function () {
        throw new Error("Method not implemented.");
    };
    GridControlMock.prototype.addOnLoad = function (handler) {
        this.onLoadHandlers.push(handler);
    };
    GridControlMock.prototype.getContextType = function () {
        return this.contextType;
    };
    GridControlMock.prototype.getEntityName = function () {
        return this.entityName;
    };
    GridControlMock.prototype.getGrid = function () {
        return this.grid;
    };
    GridControlMock.prototype.getViewSelector = function () {
        return this.viewSelector;
    };
    GridControlMock.prototype.refresh = function () {
        throw new Error("Method not implemented.");
    };
    GridControlMock.prototype.removeOnLoad = function (handler) {
        for (var i = this.onLoadHandlers.length - 1; i >= 0; i--) {
            var func = this.onLoadHandlers[i];
            if (func === handler) {
                this.onLoadHandlers.splice(i, 1);
                break;
            }
        }
    };
    GridControlMock.prototype.getFetchXml = function () {
        throw new Error("getFetchXml not implemented.");
    };
    GridControlMock.prototype.getGridType = function () {
        throw new Error("getGridType not implemented.");
    };
    GridControlMock.prototype.getRelationship = function () {
        return this.relationship;
    };
    GridControlMock.prototype.getUrl = function (client) {
        throw new Error("getUrl not implemented.");
    };
    GridControlMock.prototype.openRelatedGrid = function () {
        throw new Error("openRelatedGrid not implemented.");
    };
    return GridControlMock;
}(control_mock_1.ControlMock));
exports.GridControlMock = GridControlMock;
//# sourceMappingURL=gridcontrol.mock.js.map