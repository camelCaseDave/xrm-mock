/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../node_modules/@types/xrm/index.d.ts" />

/// <reference path="../../src/context/context.mock.ts" />
/// <reference path="../../src/clientcontext/clientcontext.mock.ts" />

describe('Xrm.Context Mock', () => {
    beforeEach(() => {
        this.context = new ContextMock(new ClientContextMock('Web', 'Online'));
    });

    it('should instantiate', () => {
        expect(this.context).toBeDefined();
    });   
});
