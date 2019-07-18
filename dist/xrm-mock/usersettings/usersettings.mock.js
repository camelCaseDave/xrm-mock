"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserSettingsMock = /** @class */ (function () {
    function UserSettingsMock(components) {
        this.defaultDashboardId = components.defaultDashboardId;
        this.isGuidedHelpEnabled = components.isGuidedHelpEnabled;
        this.isHighContrastEnabled = components.isHighContrastEnabled;
        this.isRTL = components.isRTL;
        this.languageId = components.languageId;
        this.securityRolePrivileges = components.securityRolePrivileges;
        this.securityRoles = components.securityRoles;
        this.transactionCurrencyId = components.transactionCurrencyId;
        this.userId = components.userId;
        this.userName = components.userName;
    }
    UserSettingsMock.prototype.dateFormattingInfo = function () {
        throw new Error("Not implemented.");
    };
    UserSettingsMock.prototype.getTimeZoneOffsetMinutes = function () {
        throw new Error("Not implemented");
    };
    return UserSettingsMock;
}());
exports.UserSettingsMock = UserSettingsMock;
//# sourceMappingURL=usersettings.mock.js.map