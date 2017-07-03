"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StageMock = (function () {
    function StageMock(id, name, status, category, steps) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.category = category;
        this.steps = steps;
    }
    StageMock.prototype.getCategory = function () {
        return { getValue: function () {
                throw ('get category value not implemented');
            } };
    };
    StageMock.prototype.getEntityName = function () {
        throw ('get entity name not implemented');
    };
    StageMock.prototype.getId = function () {
        return this.id;
    };
    StageMock.prototype.getName = function () {
        return this.name;
    };
    StageMock.prototype.getStatus = function () {
        return this.status;
    };
    StageMock.prototype.getSteps = function () {
        return this.steps;
    };
    return StageMock;
}());
exports.StageMock = StageMock;
