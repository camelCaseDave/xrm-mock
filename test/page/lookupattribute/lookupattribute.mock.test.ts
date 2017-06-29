/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { AttributeMock } from '../../../src/page/attribute/attribute.mock';
import { LookupValueMock } from '../../../src/page/lookupvalue/lookupvalue.mock';
import { LookupAttributeMock} from '../../../src/page/lookupattribute/lookupattribute.mock';

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