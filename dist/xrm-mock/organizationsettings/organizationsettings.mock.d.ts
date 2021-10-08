/// <reference types="xrm" />
export declare class OrganizationSettingsMock implements Xrm.OrganizationSettings {
    baseCurrencyId: string;
    defaultCountryCode: string;
    isAutoSaveEnabled: boolean;
    languageId: number;
    organizationId: string;
    uniqueName: string;
    useSkypeProtocol: boolean;
    baseCurrency: Xrm.LookupValue;
    attributes: any;
    organizationGeo: string;
    constructor(components: IOrganizationSettingsComponents);
}
export interface IOrganizationSettingsComponents {
    baseCurrencyId?: string;
    defaultCountryCode?: string;
    isAutoSaveEnabled?: boolean;
    languageId?: number;
    organizationId?: string;
    uniqueName?: string;
    useSkypeProtocol?: boolean;
    baseCurrency?: Xrm.LookupValue;
    attributes?: any;
}
