"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenWebresourceOptionsMock = void 0;
var dialogsizeoptions_mock_1 = require("../dialogsizeoptions/dialogsizeoptions.mock");
var OpenWebresourceOptionsMock = /** @class */ (function (_super) {
    __extends(OpenWebresourceOptionsMock, _super);
    function OpenWebresourceOptionsMock(openInNewWindow, height, width) {
        var _this = _super.call(this, height, width) || this;
        _this.openInNewWindow = openInNewWindow;
        return _this;
    }
    return OpenWebresourceOptionsMock;
}(dialogsizeoptions_mock_1.DialogSizeOptionsMock));
exports.OpenWebresourceOptionsMock = OpenWebresourceOptionsMock;
//# sourceMappingURL=openwebresourceoptions.mock.js.map