/// <reference types="xrm" />
import { StringAttributeMock } from "../../attributes/stringattribute/stringattribute.mock";
import { AutoLookupControlMock, IAttAutoLookupControlComponents, IAutoLookupControlComponents } from "../autolookupcontrol/autolookupcontrol.mock";
export declare class StringControlMock extends AutoLookupControlMock<StringControlMock, StringAttributeMock, string> implements Xrm.Controls.StringControl {
    constructor(components: IStringControlComponents);
}
export interface IStringControlComponents extends IAttStringControlComponents, IAutoLookupControlComponents<StringControlMock, StringAttributeMock, string> {
    name: string;
}
export interface IAttStringControlComponents extends IAttAutoLookupControlComponents<StringControlMock, StringAttributeMock, string> {
}
