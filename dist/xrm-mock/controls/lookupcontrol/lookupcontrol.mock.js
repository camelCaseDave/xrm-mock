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
exports.LookupControlMock = void 0;
var standardcontrol_mock_1 = require("../standardcontrol/standardcontrol.mock");
var LookupControlMock = /** @class */ (function (_super) {
    __extends(LookupControlMock, _super);
    function LookupControlMock(components) {
        var _this = _super.call(this, LookupControlMock.defaultComponents(components)) || this;
        _this.preSearchHandlers = [];
        _this.views = components.views || [];
        _this.filters = components.filters || [];
        _this.preSearchHandlers = components.preSearchHandlers || [];
        if (_this.views && _this.views.length > 1) {
            var defaultViews = _this.views.filter(function (v) { return v.isDefault; }).length;
            if (defaultViews > 1) {
                throw new Error("Lookup Control cannot have more than one default view.");
            }
            else if (defaultViews === 0) {
                _this.views[0].isDefault = true;
            }
        }
        return _this;
    }
    LookupControlMock.defaultComponents = function (components) {
        components.controlType = "lookup";
        return components;
    };
    LookupControlMock.prototype.addPreSearch = function (handler) {
        this.preSearchHandlers.push(handler);
    };
    LookupControlMock.prototype.addCustomFilter = function (filter, entityLogicalName) {
        this.filters.push({ filter: filter, entityLogicalName: entityLogicalName });
    };
    LookupControlMock.prototype.addCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
        if (isDefault && this.getDefaultView()) {
            throw new Error("Lookup Control cannot have more than one default view.");
        }
        this.views.push({
            entityName: entityName,
            fetchXml: fetchXml,
            isDefault: isDefault,
            layoutXml: layoutXml,
            viewDisplayName: viewDisplayName,
            viewId: viewId,
        });
    };
    LookupControlMock.prototype.getDefaultView = function () {
        for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
            var view = _a[_i];
            if (view.isDefault) {
                return view.viewId;
            }
        }
        throw new Error("No default view was found!");
    };
    LookupControlMock.prototype.getEntityTypes = function () {
        throw new Error("Method not implemented.");
    };
    LookupControlMock.prototype.setEntityTypes = function (entityLogicalNames) {
        throw new Error("Method not implemented.");
    };
    LookupControlMock.prototype.removePreSearch = function (handler) {
        throw new Error("remove presearch not implemented");
    };
    LookupControlMock.prototype.setDefaultView = function (viewGuid) {
        for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
            var view = _a[_i];
            view.isDefault = view.viewId === viewGuid;
        }
    };
    LookupControlMock.prototype.addOnLookupTagClick = function (handler) {
        throw new Error("addOnLookupTagClick not implemented");
    };
    LookupControlMock.prototype.removeOnLookupTagClick = function (handler) {
        throw new Error("removeOnLookupTagClick not implemented");
    };
    return LookupControlMock;
}(standardcontrol_mock_1.StandardControlMock));
exports.LookupControlMock = LookupControlMock;
//# sourceMappingURL=lookupcontrol.mock.js.map