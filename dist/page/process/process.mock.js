"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessMock = (function () {
    function ProcessMock(id, name, stages, rendered) {
        this.id = id;
        this.name = name;
        this.stages = stages;
        this.rendered = rendered;
    }
    ProcessMock.prototype.getId = function () {
        return this.id;
    };
    ProcessMock.prototype.getName = function () {
        return this.name;
    };
    ProcessMock.prototype.getStages = function () {
        return this.stages;
    };
    ProcessMock.prototype.isRendered = function () {
        return this.rendered;
    };
    return ProcessMock;
}());
exports.ProcessMock = ProcessMock;
