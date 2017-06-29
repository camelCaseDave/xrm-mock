/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { AttributeMock } from '../../../src/page/attribute/attribute.mock';
import { BooleanAttributeMock } from '../../../src/page/booleanattribute/booleanattribute.mock';
import { EnumAttributeMock } from '../../../src/page/enumattribute/enumattribute.mock';

describe('Xrm.Page.BooleanAttribute Mock', () => {
    beforeEach(() => {
        this.booleanAttribute = new BooleanAttributeMock(new EnumAttributeMock(new AttributeMock('new_isHavingFun', true, false)));
    });

    it('should instantiate', () => {
        expect(this.booleanAttribute).toBeDefined();
    });

    it('should have an initial value of true', () => {
        expect(this.booleanAttribute.getInitialValue()).toBe(true);
    });
});