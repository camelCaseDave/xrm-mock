"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControlHelpers = /** @class */ (function () {
    function ControlHelpers() {
    }
    ControlHelpers.setControlsParent = function (controls, parent) {
        controls.forEach(function (control) {
            control.parent = parent;
        });
    };
    return ControlHelpers;
}());
exports.default = ControlHelpers;
//# sourceMappingURL=control.helper.js.map