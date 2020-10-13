/// <reference types="xrm" />
export declare class ContextMock implements Xrm.GlobalContext {
    organizationSettings: Xrm.OrganizationSettings;
    userSettings: Xrm.UserSettings;
    client: Xrm.ClientContext;
    clientUrl: string;
    currentTheme: Xrm.Theme;
    isAutoSaveEnabled: boolean;
    orgLcid: number;
    orgUniqueName: string;
    timeZoneOffset: number;
    userId: string;
    userLcid: number;
    userName: string;
    userRoles: string[];
    version: string;
    constructor(components: IContextComponents);
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
    isOnPremises(): boolean;
    getWebResourceUrl(webResourceName: string): string;
}
export interface IContextComponents {
    clientContext: Xrm.ClientContext;
    clientUrl?: string;
    currentTheme?: Xrm.Theme;
    isAutoSaveEnabled?: boolean;
    orgLcid?: number;
    orgUniqueName?: string;
    timeZoneOffset?: number;
    userSettings?: Xrm.UserSettings;
    userId?: string;
    userLcid?: number;
    userName?: string;
    userRoles?: string[];
    version?: string;
}
