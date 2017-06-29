export class ContextMock implements Xrm.Context {
    client: Xrm.ClientContext;

    constructor(clientContext: Xrm.ClientContext) {
        this.client = clientContext;
    }

    getClientUrl(): string {
        throw ('get client url not implemented');
    }

    getCurrentTheme(): Xrm.Theme {
        throw ('get current theme not implemented');
    }

    getIsAutoSaveEnabled(): boolean {
        throw ('get is auto save enabled not implemented');
    }

    getOrgLcid(): number {
        throw ('get org lcid not implemented');
    }

    getOrgUniqueName(): string {
        throw ('get org unique name not implemented');
    }

    getQueryStringParameters(): { [index: string]: any } {
        throw ('get query string parameters not implemented');
    }

    getTimeZoneOffsetMinutes(): number {
        throw ('get time zone offset minutes not implemented');
    }

    getUserId(): string {
        throw ('get user id not implemented');
    }

    getUserLcid(): number {
        throw ('get user lcid not implemented');
    }

    getUserName(): string {
        throw ('get user name not implemented');
    }

    getUserRoles(): string[] {
        throw ('get user roles not implemented');
    }

    getVersion(): string {
        throw ('get version not implemented');
    }

    prependOrgName(sPath: string): string {
        throw ('prepend org name not implemented');
    }
}