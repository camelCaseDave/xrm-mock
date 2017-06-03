/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../node_modules/@types/xrm/index.d.ts" />

/// <reference path="../../src/context/context.mock.ts" />
/// <reference path="../../src/clientcontext/clientcontext.mock.ts" />

describe('Xrm.ClientContext Mock', () => {
    beforeEach(() => {
        this.clientContext = new ClientContextMock('Web', 'Online');
    });

    it('should instantiate', () => {
        expect(this.clientContext).toBeDefined;
    });

    it('should have a Web client', () => {
        expect(this.clientContext.getClient()).toBe('Web');
    });

    it('should have an Online client state', () => {
        expect(this.clientContext.getClientState()).toBe('Online');
    });
});
