"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityMock = void 0;
var xrm_mock_generator_1 = require("../../xrm-mock-generator");
var itemcollection_mock_1 = require("../collection/itemcollection/itemcollection.mock");
var EntityMock = /** @class */ (function () {
    function EntityMock(components) {
        components = components || {};
        this.id = components.id || "{deadbeef-dead-beef-dead-beefdeadbeaf}";
        this.entityName = components.entityName || "contact";
        this.primaryValue = components.primaryValue || "Default Contact";
        this.attributes = components.attributes || new itemcollection_mock_1.ItemCollectionMock();
        this.saveEventHandlers = [];
    }
    EntityMock.prototype.addOnPostSave = function (handler) {
        throw new Error("Method not implemented.");
    };
    EntityMock.prototype.addOnSave = function (handler) {
        this.saveEventHandlers.push(handler);
    };
    EntityMock.prototype.getEntityName = function () {
        return this.entityName;
    };
    EntityMock.prototype.getDataXml = function () {
        throw new Error(("getDataXml not implemented"));
    };
    EntityMock.prototype.getEntityReference = function () {
        return {
            entityType: this.entityName,
            id: this.id,
            name: this.primaryValue,
        };
    };
    EntityMock.prototype.getId = function () {
        return this.id;
    };
    EntityMock.prototype.getIsDirty = function () {
        var isDirty = false;
        if (this.attributes) {
            for (var i = 0; i < this.attributes.getLength(); i++) {
                var attr = this.attributes.get(i);
                if (attr.getIsDirty()) {
                    isDirty = true;
                    break;
                }
            }
        }
        return isDirty;
    };
    EntityMock.prototype.getPrimaryAttributeValue = function () {
        return this.primaryValue;
    };
    EntityMock.prototype.isValid = function () {
        throw new Error("isValid not implemented.");
    };
    EntityMock.prototype.removeOnSave = function (handler) {
        var index = this.saveEventHandlers.indexOf(handler);
        this.saveEventHandlers.splice(index);
    };
    EntityMock.prototype.save = function (saveMode) {
        var context = this.getSaveContext(saveMode);
        var _loop_1 = function (handler) {
            var index = this_1.saveEventHandlers.indexOf(handler);
            context.getDepth = function () { return index; };
            handler(context);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.saveEventHandlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            _loop_1(handler);
        }
    };
    EntityMock.prototype.getSaveContext = function (saveMode) {
        var _this = this;
        return {
            getContext: function () {
                return xrm_mock_generator_1.XrmMockGenerator.context;
            },
            getDepth: null,
            getEventArgs: function () {
                return _this.getSaveEventArgs(saveMode);
            },
            getEventSource: function () {
                throw new Error("getEventSource not implemented.");
            },
            getFormContext: function () {
                throw new Error("getFormContext not implemented.");
            },
            getSharedVariable: function () {
                throw new Error("getSharedVariable not implemented.");
            },
            setSharedVariable: function () {
                throw new Error("setSharedVariable not implemented.");
            },
        };
    };
    EntityMock.prototype.getSaveEventArgs = function (saveMode) {
        return {
            getSaveMode: function () {
                var mode;
                if (saveMode == null) {
                    mode = 1 /* Save */;
                }
                else if (saveMode === "saveandclose") {
                    mode = 2 /* SaveAndClose */;
                }
                else if (saveMode === "saveandnew") {
                    mode = 59 /* SaveAndNew */;
                }
                else {
                    mode = saveMode;
                }
                return mode;
            },
            isDefaultPrevented: function () { return false; },
            preventDefault: function () {
                throw new Error("preventDefault not implemented.");
            },
            preventDefaultOnError: function () {
                throw new Error("preventDefaultOnError not implemented.");
            }
        };
    };
    return EntityMock;
}());
exports.EntityMock = EntityMock;
//# sourceMappingURL=entity.mock.js.map