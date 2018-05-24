"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridMock = /** @class */ (function () {
    function GridMock(rows) {
        this.rows = rows;
    }
    GridMock.prototype.getRows = function () {
        return this.rows;
    };
    GridMock.prototype.getSelectedRows = function () {
        throw new Error("Not implemented.");
    };
    GridMock.prototype.getTotalRecordCount = function () {
        throw new Error("Not implemented.");
    };
    return GridMock;
}());
exports.GridMock = GridMock;
//# sourceMappingURL=grid.mock.js.map