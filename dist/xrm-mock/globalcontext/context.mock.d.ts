/// <reference types="xrm" />
export declare class ContextMock implements Xrm.GlobalContext {
    advancedConfigSetting: {
        [index in "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"]: number;
    };
    client: Xrm.ClientContext;
    clientUrl: string;
    currentAppName: string;
    currentAppProperties: Xrm.AppProperties;
    currentAppSettings: {
        [index: string]: string | number | boolean;
    };
    currentAppUrl: string;
    currentTheme: Xrm.Theme;
    isAutoSaveEnabled: boolean;
    onPremise: boolean;
    orgLcid: number;
    orgUniqueName: string;
    organizationSettings: Xrm.OrganizationSettings;
    queryStringParameters: {
        [index: string]: any;
    };
    timeZoneOffset: number;
    userId: string;
    userLcid: number;
    userName: string;
    userRoles: string[];
    userSettings: Xrm.UserSettings;
    version: string;
    webResourceUrl: {
        [index: string]: string;
    };
    constructor(components: IContextComponents);
    getCurrentAppSetting(settingName: string): string | number | boolean;
    getClientUrl(): string;
    getCurrentTheme(): Xrm.Theme;
    getIsAutoSaveEnabled(): boolean;
    getOrgLcid(): number;
    getOrgUniqueName(): string;
    getQueryStringParameters(): {
        [index: string]: any;
    };
    getTimeZoneOffsetMinutes(): number;
    getUserSettings(): Xrm.UserSettings;
    getUserId(): string;
    getUserLcid(): number;
    getUserName(): string;
    getUserRoles(): string[];
    getVersion(): string;
    prependOrgName(sPath: string): string;
    getAdvancedConfigSetting(setting: "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"): number;
    getCurrentAppName(): Xrm.Async.PromiseLike<string>;
    getCurrentAppProperties(): Xrm.Async.PromiseLike<Xrm.AppProperties>;
    getCurrentAppUrl(): string;
    isOnPremise(): boolean;
    getWebResourceUrl(webResourceName: string): string;
}
export interface IContextComponents {
    advancedConfigSetting?: {
        [index in "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"]: number;
    };
    clientContext: Xrm.ClientContext;
    clientUrl?: string;
    currentAppName?: string;
    currentAppProperties?: Xrm.AppProperties;
    currentAppUrl?: string;
    currentAppSettings?: {
        [index: string]: string | number | boolean;
    };
    currentTheme?: Xrm.Theme;
    isAutoSaveEnabled?: boolean;
    onPremise?: boolean;
    organizationSettings?: Xrm.OrganizationSettings;
    orgLcid?: number;
    orgUniqueName?: string;
    queryStringParameters?: {
        [index: string]: any;
    };
    timeZoneOffset?: number;
    userSettings?: Xrm.UserSettings;
    userId?: string;
    userLcid?: number;
    userName?: string;
    userRoles?: string[];
    version?: string;
    webResourceUrl?: {
        [index: string]: string;
    };
}
