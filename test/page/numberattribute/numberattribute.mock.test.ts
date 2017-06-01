/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

/// <reference path="../../../src/page/attribute/attribute.mock.ts" />
/// <reference path="../../../src/page/numberattribute/numberattribute.mock.ts" />

describe('Xrm.Page.NumberAttribute', () => {
    beforeEach(() => {
        let attribute = new AttributeMock('new_leadcount', 1500, false, 'none', 'dirty');
        this.numberAttribute = new NumberAttributeMock(attribute, null, 'none', 0, 50000, 0);
    });

    it('should have an integer attribute format of none', () => {
        expect(this.numberAttribute.getFormat()).toBe('none');
    });

    it('should have a max 50000', () => {
        expect(this.numberAttribute.getMax()).toBe(50000);
    });

    it('should have a min of 0', () => {
        expect(this.numberAttribute.getMin()).toBe(0);
    });

    it('should have a precision of 0', () => {
        expect(this.numberAttribute.getPrecision()).toBe(0);
    });

    it('should have a value of 1500', () => {
        expect(this.numberAttribute.getValue()).toBe(1500);
    });

    it('should set its value to 1600', () => {
        expect(this.numberAttribute.getValue()).toBe(1500);

        this.numberAttribute.setValue(1600);
        expect(this.numberAttribute.getValue()).toBe(1600);
    });

    it('should be dirty after its value is set', () => {
        expect(this.numberAttribute.getIsDirty()).toBe(false);
        this.numberAttribute.setValue(10);
        expect(this.numberAttribute.getIsDirty()).toBe(true);
    });

    it('should throw when setting a value above its max', () => {
        expect(this.numberAttribute.getMax()).toBe(50000);
        expect(() => { this.numberAttribute.setValue(50001) }).toThrow();
    });

    it('should throw when setting a value below its min', () => {
        expect(this.numberAttribute.getMin()).toBe(0);
        expect(() => { this.numberAttribute.setValue(-1) }).toThrow();
    });

    it('should have an attribute type of number', () => {
        expect(this.numberAttribute.getAttributeType()).toBe('number');
    });

    it('should not be dirty', () => {
        expect(this.numberAttribute.getIsDirty()).toBe(false);
    });

    it('should have a name of new_leadcount', () => {
        expect(this.numberAttribute.getName()).toBe('new_leadcount');
    });

    it('should have a requirement level of none', () => {
        expect(this.numberAttribute.getRequiredLevel()).toBe('none');
    });

    it('should set its requirement level to required', () => {
        expect(this.numberAttribute.getRequiredLevel()).toBe('none');
        this.numberAttribute.setRequiredLevel('required');
        expect(this.numberAttribute.getRequiredLevel()).toBe('required');
    });

    it('should have a submit mode of dirty', () => {
        expect(this.numberAttribute.getSubmitMode()).toBe('dirty');
    })
});