"use strict";
/// <amd-module name="xrm-mock"/>
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XrmMockGenerator = void 0;
__exportStar(require("./xrm-mock/index"), exports);
var index_1 = require("./xrm-mock-generator/index");
Object.defineProperty(exports, "XrmMockGenerator", { enumerable: true, get: function () { return index_1.XrmMockGenerator; } });
//# sourceMappingURL=index.js.map