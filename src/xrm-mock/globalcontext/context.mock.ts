export class ContextMock implements Xrm.GlobalContext {
    public organizationSettings: Xrm.OrganizationSettings;
    public userSettings: Xrm.UserSettings;
    public client: Xrm.ClientContext;
    public clientUrl: string;
    public currentTheme: Xrm.Theme;
    public isAutoSaveEnabled: boolean;
    public orgLcid: number;
    public orgUniqueName: string;
    public timeZoneOffset: number;
    public userId: string;
    public userLcid: number;
    public userName: string;
    public userRoles: string[];
    public version: string;

    constructor(components: IContextComponents) {
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
        throw new Error(("get query string parameters not implemented"));
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
        throw new Error("Method not implemented.");
    }

    public getCurrentAppName(): Xrm.Async.PromiseLike<string> {
        throw new Error("Method not implemented.");
    }

    public getCurrentAppProperties(): Xrm.Async.PromiseLike<Xrm.AppProperties> {
        throw new Error("Method not implemented.");
    }

    public getCurrentAppUrl(): string {
        throw new Error("Method not implemented.");
    }

    public isOnPremise(): boolean {
        throw new Error("Method not implemented.");
    }

    public isOnPremises(): boolean {
        throw new Error("Method not implemented.");
    }

    public getWebResourceUrl(webResourceName: string): string {
        throw new Error("Method not implemented.");
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
        useSkypeProtocol: true
    }
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
