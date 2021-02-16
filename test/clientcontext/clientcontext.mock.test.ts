import { ClientContextMock} from "../../src/xrm-mock/clientcontext/clientcontext.mock";

describe("Xrm.ClientContext Mock", () => {
    let clientContext;

    beforeEach(() => {
        clientContext = new ClientContextMock("Web", "Online");
    });

    it("should instantiate", () => {
        expect(clientContext).toBeDefined();
    });

    it("should have a Web client", () => {
        expect(clientContext.getClient()).toBe("Web");
    });

    it("should have an Online client state", () => {
        expect(clientContext.getClientState()).toBe("Online");
    });
});
