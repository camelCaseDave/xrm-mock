"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIndex = void 0;
function findIndex(handlers, handler) {
    return handlers.findIndex(function (item) { return item.name === handler.name; });
}
exports.findIndex = findIndex;
//# sourceMappingURL=array.helper.js.map