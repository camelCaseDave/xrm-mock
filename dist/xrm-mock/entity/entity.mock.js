"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntityMock = /** @class */ (function () {
    function EntityMock(id, entityName, attributes) {
        this.id = id;
        this.entityName = entityName;
        this.attributes = attributes;
    }
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
            name: "",
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
        throw new Error(("getPrimaryAttributeValue not implemented"));
    };
    EntityMock.prototype.isValid = function () {
        throw new Error("isValid not implemented.");
    };
    EntityMock.prototype.removeOnSave = function (handler) {
        var index = this.saveEventHandlers.indexOf(handler);
        this.saveEventHandlers.splice(index);
    };
    EntityMock.prototype.save = function (saveMode) {
        var context = {
            getContext: function () {
                throw new Error("getContext not implemented.");
            },
            getDepth: function () {
                throw new Error("getDepth not implemented.");
            },
            getEventArgs: function () {
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
                        return mode;
                    },
                    isDefaultPrevented: function () { return false; },
                    preventDefault: function () {
                        throw new Error("preventDefault not implemented.");
                    },
                };
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
        for (var _i = 0, _a = this.saveEventHandlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler(context);
        }
    };
    return EntityMock;
}());
exports.EntityMock = EntityMock;
//# sourceMappingURL=entity.mock.js.map