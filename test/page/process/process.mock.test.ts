/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { ProcessMock} from '../../../src/page/process/process.mock';
import { StageMock} from '../../../src/page/stage/stage.mock';
import { StepMock } from '../../../src/page/step/step.mock';
import { ItemCollectionMock} from '../../../src/collection/itemcollection/itemcollection.mock';

describe('Xrm.Page.Process Mock', () => {
    beforeEach(() => {
        let firstNameStep = new StepMock('First Name', 'firstname', false);
        let lastNameStep = new StepMock('Last Name', 'lastname', false);
        let stage1 = new StageMock('6001', 'Start', 'active', null, [firstNameStep]);
        let stage2 = new StageMock('6002', 'Finish', 'active', null, [lastNameStep]);

        this.process = new ProcessMock('4444', 'Sales Process', new ItemCollectionMock<Xrm.Page.Stage>([stage1, stage2]), true);
    });

    it('should instantiate', () => {
        expect(this.process).toBeDefined();
    });

    it('should have an id of 4444', () => {
        expect(this.process.getId()).toBe('4444');
    });

    it('should be called Sales Process', () => {
        expect(this.process.getName()).toBe('Sales Process');
    });

    it('should be rendered', () => {
        expect(this.process.isRendered()).toBe(true);
    });

    it('should be toggled to not rendered', () => {
        expect(this.process.isRendered()).toBe(true);
    });

    it('should have 2 stages', () => {
        let stages = this.process.getStages();
        expect(stages).toBeDefined();
        expect(stages.getLength()).toBe(2);
    });
});