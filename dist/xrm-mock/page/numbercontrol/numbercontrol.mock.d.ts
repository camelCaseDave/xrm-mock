import { AutoLookupControlMock, IAttAutoLookupControlComponents, IAutoLookupControlComponents } from "../autolookupcontrol/autolookupcontrol.mock";
import { NumberAttributeMock } from "../numberattribute/numberattribute.mock";
export declare class NumberControlMock extends AutoLookupControlMock<NumberControlMock, NumberAttributeMock, number> implements Xrm.Page.NumberControl {
    private static defaultComponents(components);
    constructor(components: INumberControlComponents);
}
export interface INumberControlComponents extends IAutoLookupControlComponents<NumberControlMock, NumberAttributeMock, number>, IAttNumberControlComponents {
}
export interface IAttNumberControlComponents extends IAttAutoLookupControlComponents<NumberControlMock, NumberAttributeMock, number> {
}
