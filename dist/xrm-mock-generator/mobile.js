"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_mock_1 = require("../xrm-mock/mobile/mobile.mock");
var mobileoffline_mock_1 = require("../xrm-mock/mobileoffline/mobileoffline.mock");
var Mobile = /** @class */ (function () {
    function Mobile() {
    }
    Mobile.createMobile = function () {
        var mobile = new mobile_mock_1.MobileMock(new mobileoffline_mock_1.MobileOfflineMock());
        return mobile;
    };
    return Mobile;
}());
exports.default = Mobile;
//# sourceMappingURL=mobile.js.map