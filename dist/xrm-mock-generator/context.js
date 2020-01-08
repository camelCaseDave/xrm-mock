"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.createContext = function (client) {
        var context = new XrmMock.ContextMock({
            clientContext: new XrmMock.ClientContextMock(client || "Web", "Online"),
            orgUniqueName: "",
            userSettings: new XrmMock.UserSettingsMock({
                isGuidedHelpEnabled: false,
                isHighContrastEnabled: false,
                isRTL: false,
                securityRolePrivileges: [],
                securityRoles: [],
                userId: "{00000000-0000-0000-0000-000000000000}",
                userName: "jdoe",
            }),
        });
        return context;
    };
    return Context;
}());
exports.default = Context;
//# sourceMappingURL=context.js.map