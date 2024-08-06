"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMock = void 0;
var xrmpromise_mock_1 = require("../async/xrmpromise/xrmpromise.mock");
var ContextMock = /** @class */ (function () {
    function ContextMock(components) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.advancedConfigSetting = (_a = components.advancedConfigSetting) !== null && _a !== void 0 ? _a : { MaxChildIncidentNumber: undefined, MaxIncidentMergeNumber: undefined };
        this.client = components.clientContext;
        this.clientUrl = components.clientUrl;
        this.currentAppName = components.currentAppName;
        this.currentAppProperties = components.currentAppProperties;
        this.currentAppSettings = (_b = components.currentAppSettings) !== null && _b !== void 0 ? _b : {};
        this.currentAppUrl = components.currentAppUrl;
        this.currentTheme = components.currentTheme;
        this.isAutoSaveEnabled = components.isAutoSaveEnabled;
        this.onPremise = components.onPremise;
        this.orgLcid = components.orgLcid;
        this.orgUniqueName = components.orgUniqueName;
        this.organizationSettings = (_c = components.organizationSettings) !== null && _c !== void 0 ? _c : buildDefaultOrganizationSettings();
        this.queryStringParameters = (_d = components.queryStringParameters) !== null && _d !== void 0 ? _d : {};
        this.timeZoneOffset = components.timeZoneOffset;
        this.userId = (_e = components.userId) !== null && _e !== void 0 ? _e : components.userSettings.userId;
        this.userLcid = (_f = components.userLcid) !== null && _f !== void 0 ? _f : components.userSettings.languageId;
        this.userName = (_g = components.userName) !== null && _g !== void 0 ? _g : components.userSettings.userName;
        this.userRoles = (_h = components.userRoles) !== null && _h !== void 0 ? _h : components.userSettings.securityRoles;
        this.userSettings = components.userSettings;
        this.version = components.version;
        this.webResourceUrl = components.webResourceUrl;
    }
    ContextMock.prototype.getCurrentAppSetting = function (settingName) {
        return this.currentAppSettings[settingName];
    };
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
        return this.queryStringParameters;
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
        return this.advancedConfigSetting[setting];
    };
    ContextMock.prototype.getCurrentAppName = function () {
        var _this = this;
        return new xrmpromise_mock_1.XrmPromiseMock(new Promise(function (resolve) {
            resolve(_this.currentAppName);
        }));
    };
    ContextMock.prototype.getCurrentAppProperties = function () {
        var _this = this;
        return new xrmpromise_mock_1.XrmPromiseMock(new Promise(function (resolve) {
            resolve(_this.currentAppProperties);
        }));
    };
    ContextMock.prototype.getCurrentAppUrl = function () {
        return this.currentAppUrl;
    };
    ContextMock.prototype.isOnPremise = function () {
        return this.onPremise;
    };
    ContextMock.prototype.getWebResourceUrl = function (webResourceName) {
        return this.getWebResourceUrl[webResourceName];
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
        useSkypeProtocol: true,
        organizationGeo: ""
    };
}
//# sourceMappingURL=context.mock.js.map