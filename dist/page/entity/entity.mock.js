"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntityMock = (function () {
    function EntityMock(attributes) {
        this.attributes = attributes;
    }
    EntityMock.prototype.addOnSave = function (handler) {
        throw ('addOnSave not implemented');
    };
    EntityMock.prototype.getEntityName = function () {
        throw ('getEntityName not implemented');
    };
    EntityMock.prototype.getDataXml = function () {
        throw ('getDataXml not implemented');
    };
    EntityMock.prototype.getId = function () {
        throw ('getId not implemented');
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
        throw ('getPrimaryAttributeValue not implemented');
    };
    EntityMock.prototype.removeOnSave = function (handler) {
        throw ('removeOnSave not implemented');
    };
    EntityMock.prototype.save = function (param) {
        throw ('save not implemented');
    };
    return EntityMock;
}());
exports.EntityMock = EntityMock;
