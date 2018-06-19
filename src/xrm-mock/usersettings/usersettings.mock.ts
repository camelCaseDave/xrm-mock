export class UserSettingsMock implements Xrm.UserSettings {
  public defaultDashboardId: string;
  public isGuidedHelpEnabled: boolean;
  public isHighContrastEnabled: boolean;
  public isRTL: boolean;
  public languageId: number;
  public securityRolePrivileges: string[];
  public securityRoles: string[];
  public transactionCurrencyId: string;
  public userId: string;
  public userName: string;

  constructor(components: IUserSettingsComponents) {
    this.defaultDashboardId = components.defaultDashboardId;
    this.isGuidedHelpEnabled = components.isGuidedHelpEnabled;
    this.isHighContrastEnabled = components.isHighContrastEnabled;
    this.isRTL = components.isRTL;
    this.languageId = components.languageId;
    this.securityRolePrivileges = components.securityRolePrivileges;
    this.securityRoles = components.securityRoles;
    this.transactionCurrencyId = components.transactionCurrencyId;
    this.userId = components.userId;
    this.userName = components.userName;
  }

  public dateFormattingInfo(): Xrm.DateFormattingInfo {
    throw new Error("Not implemented.");
  }
  public getTimeZoneOffsetMinutes(): number {
    throw new Error("Not implemented");
  }
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
