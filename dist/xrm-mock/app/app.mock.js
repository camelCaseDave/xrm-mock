"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMock = void 0;
var xrmpromise_mock_1 = require("../async/xrmpromise/xrmpromise.mock");
var sidePanes_mock_1 = require("./sidePanes.mock");
var AppMock = /** @class */ (function () {
    function AppMock() {
        this.globalNotifications = {};
        this.sidePanes = new sidePanes_mock_1.SidePanesMock();
    }
    AppMock.prototype.addGlobalNotification = function (notification) {
        AppMock.count += 1;
        var id = "00000000-0000-0000-0000-" + AppMock.count.toString().padStart(12, "0");
        this.globalNotifications[id] = notification;
        return new xrmpromise_mock_1.XrmPromiseMock(Promise.resolve(id));
    };
    AppMock.prototype.clearGlobalNotification = function (uniqueId) {
        delete this.globalNotifications[uniqueId];
        return new xrmpromise_mock_1.XrmPromiseMock(Promise.resolve(uniqueId));
    };
    AppMock.count = 0;
    return AppMock;
}());
exports.AppMock = AppMock;
//# sourceMappingURL=app.mock.js.map