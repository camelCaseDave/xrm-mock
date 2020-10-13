"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridMock = void 0;
var GridMock = /** @class */ (function () {
    function GridMock(rows, selectedRows) {
        this.rows = rows;
        this.selectedRows = selectedRows;
    }
    GridMock.prototype.getRows = function () {
        return this.rows;
    };
    GridMock.prototype.getSelectedRows = function () {
        return this.selectedRows;
    };
    GridMock.prototype.getTotalRecordCount = function () {
        return this.rows.getLength();
    };
    return GridMock;
}());
exports.GridMock = GridMock;
//# sourceMappingURL=grid.mock.js.map