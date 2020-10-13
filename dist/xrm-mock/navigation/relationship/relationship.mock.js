"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipMock = void 0;
var RelationshipMock = /** @class */ (function () {
    function RelationshipMock(components) {
        this.attributeName = components.attributeName;
        this.name = components.name;
        this.navigationPropertyName = components.navigationPropertyName;
        this.relationshipType = components.relationshipType;
        this.roleType = components.roleType;
    }
    return RelationshipMock;
}());
exports.RelationshipMock = RelationshipMock;
//# sourceMappingURL=relationship.mock.js.map