/// <reference types="xrm" />
import { StringControlMock } from "../../page/stringcontrol/stringcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class StringAttributeMock extends AttributeMock<StringControlMock, string> implements Xrm.Page.StringAttribute {
    static create(name: string, value?: string): StringAttributeMock;
    private static defaultComponents(components);
    maxLength: number;
    constructor(components: IStringAttributeComponents);
    getFormat(): Xrm.Page.StringAttributeFormat;
    getMaxLength(): number;
    setValue(value: string): void;
}
export interface IStringAttributeComponents extends IAttributeComponents<StringControlMock, string> {
    format?: Xrm.Page.StringAttributeFormat;
    maxLength?: number;
}
