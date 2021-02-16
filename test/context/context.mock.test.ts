import { ClientContextMock } from "../../src/xrm-mock/clientcontext/clientcontext.mock";
import { ContextMock } from "../../src/xrm-mock/globalcontext/context.mock";

describe("Xrm.Context Mock", () => {
    let clientUrl: string;
    let userId: string;
    let userRoles: Array<string>;
    let version: string;
    let context: ContextMock;

    beforeEach(() => {
        clientUrl = "https://org.crm.dynamics.com/";
        userId = "{B05EC7CE-5D51-DF11-97E0-00155DB232D0}";
        userRoles = ["cf4cc7ce-5d51-df11-97e0-00155db232d0"];
        version = "8.2.1.185";
        context = new ContextMock({
            clientContext: new ClientContextMock("Web", "Online"),
            clientUrl, currentTheme: "default", isAutoSaveEnabled: false, orgLcid: 1031,
            orgUniqueName: "Contoso", timeZoneOffset: 0,
            userId, userLcid: 1031, userName: "Joe Bloggs", userRoles,
            version,
        });
    });

    it("should exist", () => {
        expect(context).toBeDefined();
    });

    it("should get the client Url", () => {
        expect(context.getClientUrl()).toBe(clientUrl);
    });

    it("should get the current theme", () => {
        expect(context.getCurrentTheme()).toBe("default");
    });

    it("should not have auto save enabled", () => {
        expect(context.getIsAutoSaveEnabled()).toBe(false);
    });

    it("should have an org language code of 1031", () => {
        expect(context.getOrgLcid()).toBe(1031);
    });

    it("should have an org name of Contoso", () => {
        expect(context.getOrgUniqueName()).toBe("Contoso");
    });

    it("should have no time zone offset", () => {
        expect(context.getTimeZoneOffsetMinutes()).toBe(0);
    });

    it("should return the correct user id", () => {
        expect(context.getUserId()).toBe(userId);
    });

    it("should return the correct users language code", () => {
        expect(context.getUserLcid()).toBe(1031);
    });

    it("should return the correct user name", () => {
        expect(context.getUserName()).toBe("Joe Bloggs");
    });

    it("should return the correct user roles", () => {
        expect(context.getUserRoles()).toBe(userRoles);
    });

    it("should return the correct CRM version", () => {
        expect(context.getVersion()).toBe(version);
    });

    it("should prepend the org name with the client url", () => {
        const prependedUrl = context.prependOrgName(clientUrl);
        expect(prependedUrl).toBe(clientUrl + "Contoso");
    });
});
