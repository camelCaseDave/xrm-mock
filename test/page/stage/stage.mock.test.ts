import { StageMock } from '../../../src/page/stage/stage.mock';

describe('Xrm.Page.Stage Mock', () => {
    beforeEach(() => {
        this.stage = new StageMock('5555', 'Sales Pipeline', 'active', 1);
    });

    it('should instantiate', () => {
        expect(this.stage).toBeDefined();
    });

    it('should have an id of 5555', () => {
        expect(this.stage.getId()).toBe('5555');
    });
    
    it('should have a category object', () => {
        expect(this.stage.getCategory).toEqual(jasmine.any(Function));
        expect(this.stage.getCategory().getValue).toEqual(jasmine.any(Function));           
    });

    it('should be called Sales Pipeline', () => {
        expect(this.stage.getName()).toBe('Sales Pipeline');
    });

    it('should be active', () => {
        expect(this.stage.getStatus()).toBe('active');
    });
});