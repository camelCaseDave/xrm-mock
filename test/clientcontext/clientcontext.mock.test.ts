import { ClientContextMock} from "../../src/xrm-mock/clientcontext/clientcontext.mock";

describe("Xrm.ClientContext Mock", () => {
    beforeEach(() => {
        this.clientContext = new ClientContextMock("Web", "Online");
    });

    it("should instantiate", () => {
        expect(this.clientContext).toBeDefined();
    });

    it("should have a Web client", () => {
        expect(this.clientContext.getClient()).toBe("Web");
    });

    it("should have an Online client state", () => {
        expect(this.clientContext.getClientState()).toBe("Online");
    });
});
