"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utility_mock_1 = require("../xrm-mock/utility/utility.mock");
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.createUtility = function () {
        var utility = new utility_mock_1.UtilityMock();
        return utility;
    };
    return Utility;
}());
exports.default = Utility;
//# sourceMappingURL=utility.js.map