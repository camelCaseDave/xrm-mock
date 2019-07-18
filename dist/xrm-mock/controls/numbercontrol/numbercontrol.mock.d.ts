/// <reference types="xrm" />
import { NumberAttributeMock } from "../../attributes/numberattribute/numberattribute.mock";
import { AutoLookupControlMock, IAttAutoLookupControlComponents, IAutoLookupControlComponents } from "../autolookupcontrol/autolookupcontrol.mock";
export declare class NumberControlMock extends AutoLookupControlMock<NumberControlMock, NumberAttributeMock, number> implements Xrm.Controls.NumberControl {
    private static defaultComponents;
    constructor(components: INumberControlComponents);
}
export interface INumberControlComponents extends IAutoLookupControlComponents<NumberControlMock, NumberAttributeMock, number>, IAttNumberControlComponents {
    name: string;
}
export interface IAttNumberControlComponents extends IAttAutoLookupControlComponents<NumberControlMock, NumberAttributeMock, number> {
}
