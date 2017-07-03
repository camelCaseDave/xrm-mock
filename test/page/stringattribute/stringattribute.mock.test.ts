import { AttributeMock } from '../../../src/page/attribute/attribute.mock';
import { StringAttributeMock} from '../../../src/page/stringattribute/stringattribute.mock';

describe('Xrm.Page.StringAttribute Mock', () => {
    beforeEach(() => {
        let attribute = new AttributeMock('firstname', 'Joe', false, 'required', 'dirty');
        this.stringAttribute = new StringAttributeMock(attribute, 'text', 20);
    });

    it('should instantiate', () => {
        expect(this.stringAttribute).toBeDefined();
    });

    it('should have a text format', () => {
        expect(this.stringAttribute.getFormat()).toBe('text');
    });

    it('should have a max length of 20', () => {
        expect(this.stringAttribute.getMaxLength()).toBe(20);
    });

    it('should have a value of Joe', () => {
        expect(this.stringAttribute.getValue()).toBe('Joe');
    });

    it('should set its value to Fred', () => {
        expect(this.stringAttribute.getValue()).toBe('Joe');
        this.stringAttribute.setValue('Fred');
        expect(this.stringAttribute.getValue()).toBe('Fred');
    });

    it('should not set its value above its max length', () => {
        expect(this.stringAttribute.getMaxLength()).toBe(20);
        let tooBig = 'abcdefghijklmnopqrstuvwxyz';
        expect(() => { this.stringAttribute.setValue(tooBig) }).toThrow();
    });
});

