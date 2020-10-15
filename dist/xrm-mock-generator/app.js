"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_mock_1 = require("../xrm-mock/app/app.mock");
var App = /** @class */ (function () {
    function App() {
    }
    App.createApp = function () {
        var app = new app_mock_1.AppMock();
        return app;
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map