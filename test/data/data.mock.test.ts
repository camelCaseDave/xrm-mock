/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../node_modules/@types/xrm/index.d.ts" />

/// <reference path="../../src/data/data.mock.ts" />

describe('Xrm.Data Mock', function () {
    beforeEach(function () {
        this.dataMock = new DataMock(null);
    });

    it('should initialise', function () {
        expect(this.dataMock).toBeDefined();
    });
});
