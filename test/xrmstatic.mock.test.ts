import  { XrmStaticMock } from '../src/xrmstatic.mock';

describe('XrmStatic Mock', () => {
    beforeEach(() => {
        this.xrmStaticMock = new XrmStaticMock(null);
    });
    it('should exist', () => {  
        expect(this.xrmStaticMock).toBeDefined();        
    });
})
