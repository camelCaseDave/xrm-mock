import { XrmPromiseMock } from "../async/xrmpromise/xrmpromise.mock";
export class ContextMock implements Xrm.GlobalContext {
    public advancedConfigSetting: {[index in "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"]: number };
    public client: Xrm.ClientContext;
    public clientUrl: string;
    public currentAppName: string;
    public currentAppProperties: Xrm.AppProperties;
    public currentAppSettings: { [index: string]: string | number | boolean  };
    public currentAppUrl: string;
    public currentTheme: Xrm.Theme;
    public isAutoSaveEnabled: boolean;
    public onPremise: boolean;
    public orgLcid: number;
    public orgUniqueName: string;
    public organizationSettings: Xrm.OrganizationSettings;
    public queryStringParameters: { [index: string]: any };
    public timeZoneOffset: number;
    public userId: string;
    public userLcid: number;
    public userName: string;
    public userRoles: string[];
    public userSettings: Xrm.UserSettings;
    public version: string;
    public webResourceUrl: { [index: string]: string };

    constructor(components: IContextComponents) {
        this.advancedConfigSetting = components.advancedConfigSetting ?? { MaxChildIncidentNumber: undefined, MaxIncidentMergeNumber: undefined };
        this.client = components.clientContext;
        this.clientUrl = components.clientUrl;
        this.currentAppName = components.currentAppName;
        this.currentAppProperties = components.currentAppProperties;
        this.currentAppSettings = components.currentAppSettings ?? {};
        this.currentAppUrl = components.currentAppUrl;
        this.currentTheme = components.currentTheme;
        this.isAutoSaveEnabled = components.isAutoSaveEnabled;
        this.onPremise = components.onPremise;
        this.orgLcid = components.orgLcid;
        this.orgUniqueName = components.orgUniqueName;
        this.organizationSettings = components.organizationSettings ?? buildDefaultOrganizationSettings();
        this.queryStringParameters = components.queryStringParameters ?? {};
        this.timeZoneOffset = components.timeZoneOffset;
        this.userId = components.userId ?? components.userSettings.userId;
        this.userLcid = components.userLcid ?? components.userSettings.languageId;
        this.userName = components.userName ?? components.userSettings.userName;
        this.userRoles = components.userRoles ?? components.userSettings.securityRoles;
        this.userSettings = components.userSettings;
        this.version = components.version;
        this.webResourceUrl = components.webResourceUrl;
    }

    getCurrentAppSetting(settingName: string): string | number | boolean {
        return this.currentAppSettings[settingName];
    }

    public getClientUrl(): string {
        return this.clientUrl;
    }

    public getCurrentTheme(): Xrm.Theme {
        return this.currentTheme;
    }

    public getIsAutoSaveEnabled(): boolean {
        return this.isAutoSaveEnabled;
    }

    public getOrgLcid(): number {
        return this.orgLcid;
    }

    public getOrgUniqueName(): string {
        return this.orgUniqueName;
    }

    public getQueryStringParameters(): { [index: string]: any } {
        return this.queryStringParameters;
    }

    public getTimeZoneOffsetMinutes(): number {
        return this.timeZoneOffset;
    }

    public getUserSettings(): Xrm.UserSettings {
        return this.userSettings;
    }

    public getUserId(): string {
        return this.userId;
    }

    public getUserLcid(): number {
        return this.userLcid;
    }

    public getUserName(): string {
        return this.userName;
    }

    public getUserRoles(): string[] {
        return this.userRoles;
    }

    public getVersion(): string {
        return this.version;
    }

    public prependOrgName(sPath: string): string {
        return sPath + this.orgUniqueName;
    }

    public getAdvancedConfigSetting(setting: "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"): number {
        return this.advancedConfigSetting[setting];
    }

    public getCurrentAppName(): Xrm.Async.PromiseLike<string> {
        return new XrmPromiseMock(new Promise((resolve) => {
            resolve(this.currentAppName);
        }));
    }

    public getCurrentAppProperties(): Xrm.Async.PromiseLike<Xrm.AppProperties> {
        return new XrmPromiseMock(new Promise((resolve) => {
            resolve(this.currentAppProperties);
        }));
    }

    public getCurrentAppUrl(): string {
        return this.currentAppUrl;
    }

    public isOnPremise(): boolean {
        return this.onPremise;
    }

    public getWebResourceUrl(webResourceName: string): string {
        return this.getWebResourceUrl[webResourceName];
    }
}

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
    }
}

export interface IContextComponents {
    advancedConfigSetting?: {[index in "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"]: number };
    clientContext: Xrm.ClientContext;
    clientUrl?: string;
    currentAppName?: string;
    currentAppProperties?: Xrm.AppProperties;
    currentAppUrl?: string;
    currentAppSettings?: { [index: string]: string | number | boolean  };
    currentTheme?: Xrm.Theme;
    isAutoSaveEnabled?: boolean;
    onPremise?: boolean;
    organizationSettings?: Xrm.OrganizationSettings;
    orgLcid?: number;
    orgUniqueName?: string;
    queryStringParameters?: { [index: string]: any };
    timeZoneOffset?: number;
    userSettings?: Xrm.UserSettings;
    userId?: string;
    userLcid?: number;
    userName?: string;
    userRoles?: string[];
    version?: string;
    webResourceUrl?: { [index: string]: string };
}
