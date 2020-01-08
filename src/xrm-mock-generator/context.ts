import * as XrmMock from "../xrm-mock/index";

export default class Context {
  public static createContext(client?: Xrm.Client): XrmMock.ContextMock {
    const context = new XrmMock.ContextMock({
      clientContext: new XrmMock.ClientContextMock(client || "Web", "Online"),
      orgUniqueName: "",
      userSettings: new XrmMock.UserSettingsMock({
        isGuidedHelpEnabled : false,
        isHighContrastEnabled: false,
        isRTL: false,
        securityRolePrivileges: [],
        securityRoles: [],
        userId: "{00000000-0000-0000-0000-000000000000}",
        userName: "jdoe",
      }),
    });
    return context;
  }
}
