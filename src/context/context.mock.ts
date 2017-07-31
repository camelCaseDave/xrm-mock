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

    constructor(components: ContextComponents) {
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

export interface ContextComponents {
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
    version?: string
}