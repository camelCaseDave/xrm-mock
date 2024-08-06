"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSaveEventArgumentsMock = void 0;
var PostSaveEventArgumentsMock = /** @class */ (function () {
    function PostSaveEventArgumentsMock(components) {
        this.entityReference = components.entityReference;
        this.isSaveSuccess = components.isSaveSuccess;
        this.saveErrorInfo = components.saveErrorInfo;
    }
    PostSaveEventArgumentsMock.prototype.getEntityReference = function () {
        return this.entityReference;
    };
    PostSaveEventArgumentsMock.prototype.getIsSaveSuccess = function () {
        return this.isSaveSuccess;
    };
    PostSaveEventArgumentsMock.prototype.getSaveErrorInfo = function () {
        return this.saveErrorInfo;
    };
    return PostSaveEventArgumentsMock;
}());
exports.PostSaveEventArgumentsMock = PostSaveEventArgumentsMock;
//# sourceMappingURL=postsaveeventarguments.mock.js.map