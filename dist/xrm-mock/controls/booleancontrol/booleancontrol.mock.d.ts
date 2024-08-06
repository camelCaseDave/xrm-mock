/// <reference types="xrm" />
import { BooleanAttributeMock } from "../../attributes/booleanattribute/booleanattribute.mock";
import { IAttStandardControlComponents, IStandardControlComponents, StandardControlMock } from "../standardcontrol/standardcontrol.mock";
export declare class BooleanControlMock extends StandardControlMock<BooleanControlMock, BooleanAttributeMock, boolean> implements Xrm.Controls.BooleanControl {
    private static defaultComponents;
    constructor(components: IBooleanControlComponents);
}
export interface IBooleanControlComponents extends IStandardControlComponents<BooleanControlMock, BooleanAttributeMock, boolean>, IAttBooleanControlComponents {
    name: string;
}
export interface IAttBooleanControlComponents extends IAttStandardControlComponents<BooleanControlMock, BooleanAttributeMock, boolean> {
}
