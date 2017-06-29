/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { FormOpenParametersMock } from '../../../src/utility/formopenparameters/formopenparameters.mock';

describe('Xrm.Utility.FormOpenParameters Mock', () => {
    beforeEach(() => {
        this.formOpenParameters = new FormOpenParametersMock('5555', 'on', 'true');
    });

    it('should instantiate', () => {
        expect(this.formOpenParameters).toBeDefined();
    });
})
