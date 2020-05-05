/// <reference types="xrm" />
import { OptionSetAttributeMock } from "../../attributes/optionsetattribute/optionsetattribute.mock";
import { OptionSetValueMock } from "../../optionsetvalue/optionsetvalue.mock";
import { IAttStandardControlComponents, IStandardControlComponents, StandardControlMock } from "../standardcontrol/standardcontrol.mock";
export declare class OptionSetControlMock extends StandardControlMock<OptionSetControlMock, OptionSetAttributeMock, number> implements Xrm.Controls.OptionSetControl {
    private static defaultComponents;
    options: OptionSetValueMock[];
    constructor(components: IOptionSetControlComponents);
    addOption(option: Xrm.OptionSetValue, index?: number): void;
    clearOptions(): void;
    removeOption(value: number): void;
    getOptions(): Xrm.OptionSetValue[];
}
export interface IOptionSetControlComponents extends IStandardControlComponents<OptionSetControlMock, OptionSetAttributeMock, number>, IAttOptionSetControlComponents {
    name: string;
}
export interface IAttOptionSetControlComponents extends IAttStandardControlComponents<OptionSetControlMock, OptionSetAttributeMock, number> {
    options?: Xrm.OptionSetValue[];
}
