/// <reference types="xrm" />
import { OptionSetControlMock } from "../../controls/optionsetcontrol/optionsetcontrol.mock";
import { OptionSetValueMock } from "../../optionsetvalue/optionsetvalue.mock";
import { EnumAttributeMock, IEnumAttributeComponents } from "../enumattribute/enumattribute.mock";
export declare class OptionSetAttributeMock extends EnumAttributeMock<OptionSetControlMock, number> implements Xrm.Attributes.OptionSetAttribute {
    static create(name: string, value?: number): OptionSetAttributeMock;
    private static defaultComponents;
    options: OptionSetValueMock[];
    selectedOption: OptionSetValueMock;
    constructor(components: IOptionSetAttributeComponents);
    getFormat(): Xrm.Attributes.OptionSetAttributeFormat;
    getOption(param: number | string): Xrm.OptionSetValue;
    getOptions(): Xrm.OptionSetValue[];
    getSelectedOption(): Xrm.OptionSetValue;
    getText(): string;
    setValue(value: number): void;
}
export interface IOptionSetAttributeComponents extends IEnumAttributeComponents<OptionSetControlMock, number> {
    format?: Xrm.Attributes.OptionSetAttributeFormat;
    options?: Xrm.OptionSetValue[];
    selectedOption?: Xrm.OptionSetValue;
}
