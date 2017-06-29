/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../node_modules/@types/xrm/index.d.ts" />

import { ContextMock } from '../../src/context/context.mock';
import { ClientContextMock } from '../../src/clientcontext/clientcontext.mock';

describe('Xrm.Context Mock', () => {
    beforeEach(() => {
        this.context = new ContextMock(new ClientContextMock('Web', 'Online'));
    });

    it('should instantiate', () => {
        expect(this.context).toBeDefined();
    });   
});
