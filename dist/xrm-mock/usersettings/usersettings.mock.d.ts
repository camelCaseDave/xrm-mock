/// <reference types="xrm" />
export declare class UserSettingsMock implements Xrm.UserSettings {
    dateFormattingInfo: Xrm.DateFormattingInfo;
    defaultDashboardId: string;
    isGuidedHelpEnabled: boolean;
    isHighContrastEnabled: boolean;
    isRTL: boolean;
    languageId: number;
    securityRolePrivileges: string[];
    securityRoles: string[];
    transactionCurrencyId: string;
    userId: string;
    userName: string;
    roles: Xrm.Collection.ItemCollection<Xrm.LookupValue>;
    transactionCurrency: Xrm.LookupValue;
    constructor(components: IUserSettingsComponents);
    getTimeZoneOffsetMinutes(): number;
}
export interface IUserSettingsComponents {
    dateFormattingInfo?: Xrm.DateFormattingInfo;
    defaultDashboardId?: string;
    isGuidedHelpEnabled: boolean;
    isHighContrastEnabled: boolean;
    isRTL: boolean;
    languageId?: number;
    securityRolePrivileges?: string[];
    securityRoles?: string[];
    transactionCurrencyId?: string;
    userId: string;
    userName: string;
    roles?: Xrm.Collection.ItemCollection<Xrm.LookupValue>;
    transactionCurrency?: Xrm.LookupValue;
}
