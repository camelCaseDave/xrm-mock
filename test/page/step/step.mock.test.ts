/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { StepMock } from '../../../src/page/step/step.mock';

describe('Xrm.Page.Step Mock', () => {
    beforeEach(() => {
        this.step = new StepMock('First Name', 'firstname', true);
    });

    it('should instantiate', () => {
        expect(this.step).toBeDefined();
    });

    it('should be called First Name', () => {
        expect(this.step.getName()).toBe('First Name');
    });

    it('should have an attribute of firstname', () => {
        expect(this.step.getAttribute()).toBe('firstname');
    });

    it('should be required', () => {
        expect(this.step.isRequired()).toBe(true);
    });
});