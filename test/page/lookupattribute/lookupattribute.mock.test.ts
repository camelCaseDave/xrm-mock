/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

/// <reference path="../../../src/page/attribute/attribute.mock.ts" />
/// <reference path="../../../src/page/lookupvalue/lookupvalue.mock.ts" />
/// <reference path="../../../src/page/lookupattribute/lookupattribute.mock.ts" />

describe('Xrm.Page.LookupAttribute Mock', () => {
    beforeEach(() => {
        this.lookupAttribute = new LookupAttributeMock(new AttributeMock('parentorganisationid', new LookupValueMock('5555', 'account', 'Boss')), false);
    });

    it('should instantiate', () => {
        expect(this.lookupAttribute).toBeDefined();
    });

    it('should not be a party list', () => {
        expect(this.lookupAttribute.getIsPartyList()).toBe(false);
    });
});