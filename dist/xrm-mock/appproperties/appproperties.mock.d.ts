/// <reference types="xrm" />
export declare class AppPropertiesMock implements Xrm.AppProperties {
    appId?: string;
    displayName?: string;
    uniqueName?: string;
    url?: string;
    webResourceId?: string;
    webResourceName?: string;
    welcomePageId?: string;
    welcomePageName?: string;
    constructor(components: IAppPropertiesComponents);
}
export interface IAppPropertiesComponents {
    appId?: string;
    displayName?: string;
    uniqueName?: string;
    url?: string;
    webResourceId?: string;
    webResourceName?: string;
    welcomePageId?: string;
    welcomePageName?: string;
}
