import { NavigationStaticMock } from "../../src/xrm-mock";
import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";

describe("XrmMockGenerator.Navigation", () => {
    let navigation: NavigationStaticMock;
    beforeEach(() => {
        navigation = XrmMockGenerator.initialise().Navigation;
    });

    it("should stub openUrl", () => {
        expect(Xrm.Navigation.openUrl).toBeDefined();
    });
});
