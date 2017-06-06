/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

/// <reference path="../../../src/page/attribute/attribute.mock.ts" />

describe('Xrm.Page.Attribute Mock', () => {
    beforeEach(() => {
        this.attributeMock = new AttributeMock('firstname', 'Joe', false, 'none', 'dirty');
    });

    it('should initialise', () => {
        expect(this.attributeMock).toBeDefined();
    });

    it('has a string attribute type', () => {
        let attributeType = this.attributeMock.getAttributeType();
        expect(attributeType).toBe('string');
    });

    it('is not dirty', () => {
        let isDirty = this.attributeMock.getIsDirty();
        expect(isDirty).toBe(false);
    });

    it('should have the name firstname', () => {
        let name = this.attributeMock.getName();
        expect(name).toBe('firstname');
    });

    it('should not be required', () => {
        let required = this.attributeMock.getRequiredLevel();
        expect(required).toBe('none');
    });

    it('should have a submit mode of dirty', () =>{
        let submitMode = this.attributeMock.getSubmitMode();
        expect(submitMode).toBe('dirty');
    });

    it('should set required level to mandatory', () => {
        let required = this.attributeMock.getRequiredLevel();
        expect(required).toBe('none');

        this.attributeMock.setRequiredLevel('required');
        required = this.attributeMock.getRequiredLevel();
        expect(required).toBe('required');
    });

    it('should set submit mode to always', () => {
        let submitMode = this.attributeMock.getSubmitMode();
        expect(submitMode).toBe('dirty');

        this.attributeMock.setSubmitMode('always');
        submitMode = this.attributeMock.getSubmitMode();
        expect(submitMode).toBe('always');
    });

    it('should have a value of Joe', () => {
        let value = this.attributeMock.getValue();
        expect(value).toBe('Joe');
    });

    it('should set value to Alan', () => {
        let value = this.attributeMock.getValue();
        expect(value).toBe('Joe');

        this.attributeMock.setValue('Alan');
        value = this.attributeMock.getValue();
        expect(value).toBe('Alan');
    });
});
