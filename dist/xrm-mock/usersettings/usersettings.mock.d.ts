/// <reference types="xrm" />
export declare class UserSettingsMock implements Xrm.UserSettings {
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
    constructor(components: IUserSettingsComponents);
    dateFormattingInfo(): Xrm.DateFormattingInfo;
    getTimeZoneOffsetMinutes(): number;
}
export interface IUserSettingsComponents {
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
}
