import { AttributeMock } from '../../../src/page/attribute/attribute.mock';
import { EnumAttributeMock } from '../../../src/page/enumattribute/enumattribute.mock';

describe('Xrm.Page.EnumAttribute Mock', () => {
    beforeEach(() => {
        let attribute = new AttributeMock({ name: 'new_havingFun', value: true, isDirty: false, requiredLevel: 'none', submitMode: 'always' });
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

