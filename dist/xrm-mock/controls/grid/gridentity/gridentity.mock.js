"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridEntityMock = void 0;
var GridEntityMock = /** @class */ (function () {
    function GridEntityMock(reference) {
        this.reference = reference;
    }
    GridEntityMock.prototype.getEntityName = function () {
        return this.reference.entityType;
    };
    GridEntityMock.prototype.getEntityReference = function () {
        return this.reference;
    };
    GridEntityMock.prototype.getId = function () {
        return this.reference.id;
    };
    GridEntityMock.prototype.getPrimaryAttributeValue = function () {
        return this.reference.name;
    };
    return GridEntityMock;
}());
exports.GridEntityMock = GridEntityMock;
//# sourceMappingURL=gridentity.mock.js.map