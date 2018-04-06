import { AutoLookupControlMock,
         IAttAutoLookupControlComponents,
         IAutoLookupControlComponents } from "../autolookupcontrol/autolookupcontrol.mock";
import { NumberAttributeMock } from "../numberattribute/numberattribute.mock";

export class NumberControlMock extends AutoLookupControlMock<NumberControlMock, NumberAttributeMock, number>
                               implements Xrm.Page.NumberControl {

    private static defaultComponents(components: INumberControlComponents): INumberControlComponents {
        return components;
    }

    constructor(components: INumberControlComponents) {
         super(NumberControlMock.defaultComponents(components));
    }
}

export interface INumberControlComponents
    extends IAutoLookupControlComponents<NumberControlMock, NumberAttributeMock, number>,
            IAttNumberControlComponents {
}

export interface IAttNumberControlComponents
    extends IAttAutoLookupControlComponents<NumberControlMock, NumberAttributeMock, number> {
}
