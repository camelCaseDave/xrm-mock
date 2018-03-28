export class ContextMock implements Xrm.Context {
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
        this.client = components.clientContext;
        this.clientUrl = components.clientUrl;
        this.currentTheme = components.currentTheme;
        this.isAutoSaveEnabled = components.isAutoSaveEnabled;
        this.orgLcid = components.orgLcid;
        this.orgUniqueName = components.orgUniqueName;
        this.timeZoneOffset = components.timeZoneOffset;
        this.userId = components.userId;
        this.userLcid = components.userLcid;
        this.userName = components.userName;
        this.userRoles = components.userRoles;
        this.version = components.version;
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
}

export interface IContextComponents {
    clientContext: Xrm.ClientContext;
    clientUrl?: string;
    currentTheme?: Xrm.Theme;
    isAutoSaveEnabled?: boolean;
    orgLcid?: number;
    orgUniqueName?: string;
    timeZoneOffset?: number;
    userId?: string;
    userLcid?: number;
    userName?: string;
    userRoles?: string[];
    version?: string;
}
