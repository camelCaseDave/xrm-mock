"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StepMock = /** @class */ (function () {
    function StepMock(name, attribute, required) {
        this.name = name;
        this.attribute = attribute;
        this.required = required;
    }
    StepMock.prototype.getAttribute = function () {
        return this.attribute;
    };
    StepMock.prototype.getName = function () {
        return this.name;
    };
    StepMock.prototype.isRequired = function () {
        return this.required;
    };
    return StepMock;
}());
exports.StepMock = StepMock;
//# sourceMappingURL=step.mock.js.map