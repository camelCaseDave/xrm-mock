/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { AttributeMock } from '../../../src/page/attribute/attribute.mock';
import { DateAttributeMock } from '../../../src/page/dateattribute/dateattribute.mock';

describe('Xrm.Page.DateAttribute Mock', () => {
    beforeEach(() => {
        this.dateAttribute = new DateAttributeMock(new AttributeMock('birthdate', new Date('January 1, 1990'), false), 'date');
    });

    it('should instantiate', () => {
        expect(this.dateAttribute).toBeDefined();
    });

    it('should have a date format', () => {
        expect(this.dateAttribute.getFormat()).toBe('date');
    });   

    it('should have a value of January 1, 1990', () => {
        expect(this.dateAttribute.getValue()).toEqual(new Date('January 1, 1990'));
    });
});