"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntityMock = /** @class */ (function () {
    function EntityMock(id, attributes) {
        this.id = id;
        this.attributes = attributes;
    }
    EntityMock.prototype.addOnSave = function (handler) {
        throw new Error(("addOnSave not implemented"));
    };
    EntityMock.prototype.getEntityName = function () {
        throw new Error(("getEntityName not implemented"));
    };
    EntityMock.prototype.getDataXml = function () {
        throw new Error(("getDataXml not implemented"));
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
    EntityMock.prototype.removeOnSave = function (handler) {
        throw new Error(("removeOnSave not implemented"));
    };
    EntityMock.prototype.save = function (param) {
        throw new Error(("save not implemented"));
    };
    return EntityMock;
}());
exports.EntityMock = EntityMock;
