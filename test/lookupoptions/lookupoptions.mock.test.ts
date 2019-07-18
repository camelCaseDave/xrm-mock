import { LookupOptionsMock } from "../../src/xrm-mock/index";

describe("LookupOptions Mock", () => {
    beforeEach(() => {
        this.lookupOptions = new LookupOptionsMock({
            allowMultiSelect: true,
            entityTypes: ["account", "contact"],
            showBarcodeScanner: true,
        });
    });
    it("should exist", () => {
        expect(this.lookupOptions).toBeDefined();
    });
});
