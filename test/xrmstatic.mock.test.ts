import  { XrmStaticMock } from '../src/xrmstatic.mock';

describe('XrmStatic Mock', () => {
    beforeEach(() => {
        this.xrmStaticMock = new XrmStaticMock(null);
    });
    it('should initialise', () => {  
        expect(this.xrmStaticMock).toBeDefined();        
    });
})
