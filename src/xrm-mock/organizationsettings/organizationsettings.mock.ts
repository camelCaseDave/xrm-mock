export class OrganizationSettingsMock implements Xrm.OrganizationSettings {
  public baseCurrencyId: string;
  public defaultCountryCode: string;
  public isAutoSaveEnabled: boolean;
  public languageId: number;
  public organizationId: string;
  public uniqueName: string;
  public useSkypeProtocol: boolean;

  constructor(components: IOrganizationSettingsComponents) {
    this.baseCurrencyId = components.baseCurrencyId;
    this.defaultCountryCode = components.defaultCountryCode;
    this.isAutoSaveEnabled = components.isAutoSaveEnabled;
    this.languageId = components.languageId;
    this.organizationId = components.organizationId;
    this.uniqueName = components.uniqueName;
    this.useSkypeProtocol = components.useSkypeProtocol;
  }
}

export interface IOrganizationSettingsComponents {
  baseCurrencyId?: string;
  defaultCountryCode?: string;
  isAutoSaveEnabled?: boolean;
  languageId?: number;
  organizationId?: string;
  uniqueName?: string;
  useSkypeProtocol?: boolean;
}
