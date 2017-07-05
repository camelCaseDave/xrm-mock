export class ContextMock implements Xrm.Context {
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

    constructor(clientContext: Xrm.ClientContext, clientUrl?: string, currentTheme?: Xrm.Theme, isAutoSaveEnabled?: boolean, 
    orgLcid?: number, orgUniqueName?: string, timeZoneOffset?: number, userId?: string, userLcid?: number, 
    userName?: string, userRoles?: string[], version?: string) {
        this.client = clientContext;
        this.clientUrl = clientUrl;
        this.currentTheme = currentTheme;
        this.isAutoSaveEnabled = isAutoSaveEnabled;
        this.orgLcid = orgLcid;
        this.orgUniqueName = orgUniqueName;
        this.timeZoneOffset = timeZoneOffset;
        this.userId = userId;
        this.userLcid = userLcid;
        this.userName = userName;
        this.userRoles = userRoles;
        this.version = version;
    }

    getClientUrl(): string {
        return this.clientUrl;
    }

    getCurrentTheme(): Xrm.Theme {
        return this.currentTheme;
    }

    getIsAutoSaveEnabled(): boolean {
        return this.isAutoSaveEnabled;
    }

    getOrgLcid(): number {
        return this.orgLcid;
    }

    getOrgUniqueName(): string {
        return this.orgUniqueName;
    }

    getQueryStringParameters(): { [index: string]: any } {
        throw ('get query string parameters not implemented');
    }

    getTimeZoneOffsetMinutes(): number {
        return this.timeZoneOffset;
    }

    getUserId(): string {
        return this.userId;
    }

    getUserLcid(): number {
        return this.userLcid;
    }

    getUserName(): string {
        return this.userName;
    }

    getUserRoles(): string[] {
        return this.userRoles;
    }

    getVersion(): string {
        return this.version;
    }

    prependOrgName(sPath: string): string {
        return sPath + this.orgUniqueName;
    }
}