/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

/// <reference path="../../../src/page/attribute/attribute.mock.ts" />
/// <reference path="../../../src/page/enumattribute/enumattribute.mock.ts" />

describe('Xrm.Page.EnumAttribute Mock', () => {
    beforeEach(() => {
        let attribute = new AttributeMock('new_havingFun', true, false, 'none', 'always');
        this.enumAttribute = new EnumAttributeMock(attribute);
    });

    it('should instantiate', () => {
        expect(this.enumAttribute).toBeDefined();
    });

    it('should have an attribute', () => {
        expect(this.enumAttribute.attribute).toBeDefined();
    });

    it('should have an initial value of true', () => {
        expect(this.enumAttribute.getInitialValue()).toBe(true);
    });
});

