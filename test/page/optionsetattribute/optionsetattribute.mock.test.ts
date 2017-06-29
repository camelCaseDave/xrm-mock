/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { AttributeMock } from '../../../src/page/attribute/attribute.mock';
import { EnumAttributeMock } from '../../../src/page/enumattribute/enumattribute.mock';
import { OptionSetValueMock } from '../../../src/page/optionsetvalue/optionsetvalue.mock';
import { OptionSetAttributeMock } from '../../../src/page/optionsetattribute/optionsetattribute.mock';

describe('Xrm.Page.OptionSetAttribute Mock', () => {
    beforeEach(() => {
        let enumAttribute = new EnumAttributeMock(new AttributeMock('new_leadSources', 100000, false, 'recommended', 'dirty'));
        let options: OptionSetValueMock[] = [
            new OptionSetValueMock('Phone Call', 100000),
            new OptionSetValueMock('In Person', 100001),
            new OptionSetValueMock('Email', 100002)
        ];
        this.optionSetAttribute = new OptionSetAttributeMock(enumAttribute, options, 'language');
    });

    it('should instantiate', () => {
        expect(this.optionSetAttribute).toBeDefined();
    });

    it('should have a language format', () => {
        expect(this.optionSetAttribute.getFormat()).toBe('language');
    });

    it('should have an initial value of 100000', () => {
        expect(this.optionSetAttribute.getInitialValue()).toBe(100000);
    });

    it('should return Email when given 100002', () => {
        let email = new OptionSetValueMock('Email', 100002);
        expect(this.optionSetAttribute.getOption(100002)).toEqual(email);
    });

    it('should return Email when given Email', () => {
        let email = new OptionSetValueMock('Email', 100002);
        expect(this.optionSetAttribute.getOption('Email')).toEqual(email);
    });

    it('should have 3 options', () => {
        let options = this.optionSetAttribute.getOptions();
        expect(options.length).toBe(3);
    });

    it('should have the Phone Call option selected', () => {
        let phoneCall = new OptionSetValueMock('Phone Call', 100000);
        expect(this.optionSetAttribute.getSelectedOption()).toEqual(phoneCall);
    });

    it('should have a text of Phone Call', () => {
        expect(this.optionSetAttribute.getText()).toBe('Phone Call');
    });

    it('should change selected value to Email when its value is set to Email', () => {
        let email = new OptionSetValueMock('Email', 100002);
        this.optionSetAttribute.setValue(email.value);
        expect(this.optionSetAttribute.getValue()).toBe(email.value);
        expect(this.optionSetAttribute.getSelectedOption()).toEqual(email);
    });
});