import { LookupOptionsMock } from "../../src/xrm-mock/index";

describe("LookupOptions Mock", () => {
    let lookupOptions: LookupOptionsMock;

    beforeEach(() => {
        lookupOptions = new LookupOptionsMock({
            allowMultiSelect: true,
            entityTypes: ["account", "contact"],
            showBarcodeScanner: true,
        });
    });
    it("should exist", () => {
        expect(lookupOptions).toBeDefined();
    });
});
