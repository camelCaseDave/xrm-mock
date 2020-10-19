"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSettingsMock = void 0;
var UserSettingsMock = /** @class */ (function () {
    function UserSettingsMock(components) {
        this.dateFormattingInfo = components.dateFormattingInfo;
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
        this.roles = components.roles;
        this.transactionCurrency = components.transactionCurrency;
    }
    UserSettingsMock.prototype.getTimeZoneOffsetMinutes = function () {
        throw new Error("Not implemented");
    };
    return UserSettingsMock;
}());
exports.UserSettingsMock = UserSettingsMock;
//# sourceMappingURL=usersettings.mock.js.map