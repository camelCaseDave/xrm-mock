"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMock = void 0;
var ContextMock = /** @class */ (function () {
    function ContextMock(components) {
        this.userSettings = components.userSettings;
        this.client = components.clientContext;
        this.clientUrl = components.clientUrl;
        this.currentTheme = components.currentTheme;
        this.isAutoSaveEnabled = components.isAutoSaveEnabled;
        this.orgLcid = components.orgLcid;
        this.orgUniqueName = components.orgUniqueName;
        this.timeZoneOffset = components.timeZoneOffset;
        this.userId = components.userId || components.userSettings.userId;
        this.userLcid = components.userLcid || components.userSettings.languageId;
        this.userName = components.userName || components.userSettings.userName;
        this.userRoles = components.userRoles || components.userSettings.securityRoles;
        this.version = components.version;
        this.organizationSettings = buildDefaultOrganizationSettings();
    }
    ContextMock.prototype.getClientUrl = function () {
        return this.clientUrl;
    };
    ContextMock.prototype.getCurrentTheme = function () {
        return this.currentTheme;
    };
    ContextMock.prototype.getIsAutoSaveEnabled = function () {
        return this.isAutoSaveEnabled;
    };
    ContextMock.prototype.getOrgLcid = function () {
        return this.orgLcid;
    };
    ContextMock.prototype.getOrgUniqueName = function () {
        return this.orgUniqueName;
    };
    ContextMock.prototype.getQueryStringParameters = function () {
        throw new Error(("get query string parameters not implemented"));
    };
    ContextMock.prototype.getTimeZoneOffsetMinutes = function () {
        return this.timeZoneOffset;
    };
    ContextMock.prototype.getUserSettings = function () {
        return this.userSettings;
    };
    ContextMock.prototype.getUserId = function () {
        return this.userId;
    };
    ContextMock.prototype.getUserLcid = function () {
        return this.userLcid;
    };
    ContextMock.prototype.getUserName = function () {
        return this.userName;
    };
    ContextMock.prototype.getUserRoles = function () {
        return this.userRoles;
    };
    ContextMock.prototype.getVersion = function () {
        return this.version;
    };
    ContextMock.prototype.prependOrgName = function (sPath) {
        return sPath + this.orgUniqueName;
    };
    ContextMock.prototype.getAdvancedConfigSetting = function (setting) {
        throw new Error("Method not implemented.");
    };
    ContextMock.prototype.getCurrentAppName = function () {
        throw new Error("Method not implemented.");
    };
    ContextMock.prototype.getCurrentAppProperties = function () {
        throw new Error("Method not implemented.");
    };
    ContextMock.prototype.getCurrentAppUrl = function () {
        throw new Error("Method not implemented.");
    };
    ContextMock.prototype.isOnPremise = function () {
        throw new Error("Method not implemented.");
    };
    ContextMock.prototype.isOnPremises = function () {
        throw new Error("Method not implemented.");
    };
    ContextMock.prototype.getWebResourceUrl = function (webResourceName) {
        throw new Error("Method not implemented.");
    };
    return ContextMock;
}());
exports.ContextMock = ContextMock;
function buildDefaultOrganizationSettings() {
    return {
        baseCurrencyId: "00000000-0000-0000-0000-0000000000000",
        baseCurrency: {
            id: "00000000-0000-0000-0000-0000000000000",
            entityType: "transactioncurrency"
        },
        defaultCountryCode: null,
        isAutoSaveEnabled: true,
        languageId: 1033,
        organizationId: "00000000-0000-0000-0000-0000000000000",
        uniqueName: "test-uniqueName",
        useSkypeProtocol: true
    };
}
//# sourceMappingURL=context.mock.js.map