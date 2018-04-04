/// <reference types="xrm" />
import { OptionSetAttributeMock } from "./../optionsetattribute/optionsetattribute.mock";
import { OptionSetValueMock } from "./../optionsetvalue/optionsetvalue.mock";
import { IAttStandardControlComponents, IStandardControlComponents, StandardControlMock } from "./../standardcontrol/standardcontrol.mock";
export declare class OptionSetControlMock extends StandardControlMock<OptionSetControlMock, OptionSetAttributeMock, number> implements Xrm.Page.OptionSetControl {
    private static defaultComponents(components);
    options: OptionSetValueMock[];
    constructor(components: IOptionSetControlComponents);
    addOption(option: Xrm.Page.OptionSetValue, index?: number): void;
    clearOptions(): void;
    removeOption(value: number): void;
}
export interface IOptionSetControlComponents extends IStandardControlComponents<OptionSetControlMock, OptionSetAttributeMock, number>, IAttOptionSetControlComponents {
}
export interface IAttOptionSetControlComponents extends IAttStandardControlComponents<OptionSetControlMock, OptionSetAttributeMock, number> {
    options?: Xrm.Page.OptionSetValue[];
}
