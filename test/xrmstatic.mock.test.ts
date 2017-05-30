/// <reference path="../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../node_modules/@types/jasmine/index.d.ts" />

/// <reference path="../src/xrmstatic.mock.ts" />

describe('XrmStatic Mock', function () {
    beforeEach(() => {
        this.xrmStaticMock = new XrmStaticMock(null);
    });
    it('should initialise', () => {     
        expect(this.xrmStaticMock).toBeDefined();
    });
})

