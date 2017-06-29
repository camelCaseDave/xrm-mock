/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

import { StageMock } from '../../../src/page/stage/stage.mock';
import { StepMock } from '../../../src/page/step/step.mock';
import { ProcessMock } from '../../../src/page/process/process.mock';
import { ItemCollectionMock } from '../../../src/collection/itemcollection/itemcollection.mock';
import { ProcessManagerMock } from '../../../src/data/processmanager/processmanager.mock';

describe('Xrm.Page.data.ProcessManager Mock', () => {
    beforeEach(() => {
        let firstNameStep = new StepMock('First Name', 'firstname', false);
        let lastNameStep = new StepMock('Last Name', 'lastname', false);
        let stage1 = new StageMock('6001', 'Start', 'active', null, [firstNameStep]);
        let stage2 = new StageMock('6002', 'Finish', 'inactive', null, [lastNameStep]);

        this.process1 = new ProcessMock('4444', 'Sales Process', new ItemCollectionMock<Xrm.Page.Stage>([stage1, stage2]), true);
        this.process2 = new ProcessMock('5555', 'Service Process', new ItemCollectionMock<Xrm.Page.Stage>([stage1, stage2]), false);
        this.processManager = new ProcessManagerMock([this.process1, this.process2]);
    });

    it('should initialise', () => {
        expect(this.processManager).toBeDefined();
    });

    it('should have Sales Process active', () => {
        expect(this.processManager.getActiveProcess()).toBe(this.process1);
        expect(this.processManager.getActiveProcess()).not.toBe(this.process2);
    });

    it('should set Service Process active', () => {
        expect(this.processManager.getActiveProcess()).toBe(this.process1);
        expect(this.processManager.getActiveProcess()).not.toBe(this.process2);

        this.processManager.setActiveProcess('5555');
        expect(this.processManager.getActiveProcess()).toBe(this.process2);
        expect(this.processManager.getActiveProcess()).not.toBe(this.process1);
    });
});
