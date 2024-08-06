import { BooleanAttributeMock } from "../../attributes/booleanattribute/booleanattribute.mock";
import { IAttStandardControlComponents,
         IStandardControlComponents,
         StandardControlMock } from "../standardcontrol/standardcontrol.mock";

export class BooleanControlMock extends StandardControlMock<BooleanControlMock, BooleanAttributeMock, boolean>
                                implements Xrm.Controls.BooleanControl {

    private static defaultComponents(components: IBooleanControlComponents): IBooleanControlComponents {
        components.controlType = "optionset";
        return components;
    }

    constructor(components: IBooleanControlComponents) {
        super(BooleanControlMock.defaultComponents(components));
    }
}

export interface IBooleanControlComponents
    extends IStandardControlComponents<BooleanControlMock, BooleanAttributeMock, boolean>,
        IAttBooleanControlComponents {
    name: string;
}

export interface IAttBooleanControlComponents
    extends IAttStandardControlComponents<BooleanControlMock, BooleanAttributeMock, boolean> {
}
