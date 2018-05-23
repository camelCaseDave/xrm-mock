export class AppPropertiesMock implements Xrm.AppProperties {
  public appId?: string;
  public displayName?: string;
  public uniqueName?: string;
  public url?: string;
  public webResourceId?: string;
  public webResourceName?: string;
  public welcomePageId?: string;
  public welcomePageName?: string;

  constructor(components: IAppPropertiesComponents) {
    this.appId = components.appId;
    this.displayName = components.displayName;
    this.uniqueName = components.uniqueName;
    this.url = components.url;
    this.webResourceId = components.webResourceId;
    this.webResourceName = components.webResourceName;
    this.welcomePageId = components.welcomePageId;
    this.welcomePageName = components.welcomePageName;
  }
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
