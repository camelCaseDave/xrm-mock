/// <reference types="xrm" />
import { StringControlMock } from "../../controls/stringcontrol/stringcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class StringAttributeMock extends AttributeMock<StringControlMock, string> implements Xrm.Attributes.StringAttribute {
    static create(name: string, value?: string): StringAttributeMock;
    private static defaultComponents;
    maxLength: number;
    constructor(components: IStringAttributeComponents);
    getFormat(): Xrm.Attributes.StringAttributeFormat;
    getMaxLength(): number;
    setValue(value: string): void;
}
export interface IStringAttributeComponents extends IAttributeComponents<StringControlMock, string> {
    format?: Xrm.Attributes.StringAttributeFormat;
    maxLength?: number;
}
