import * as XrmMock from "../xrm-mock/index";

export default class Context {
  public static createContext(client?: Xrm.Client): XrmMock.ContextMock {
    const context = new XrmMock.ContextMock({
      clientContext: new XrmMock.ClientContextMock(client || "Web", "Online"),
      userSettings: new XrmMock.UserSettingsMock({
        isGuidedHelpEnabled : false,
        isHighContrastEnabled: false,
        isRTL: false,
        userId: "1337",
        userName: "jdoe",
      }),
    });
    return context;
  }
}
