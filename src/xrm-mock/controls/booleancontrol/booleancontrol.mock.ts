import { BooleanAttributeMock } from "../../attributes/booleanattribute/booleanattribute.mock";
import { IAttStandardControlComponents,
         IStandardControlComponents,
         StandardControlMock } from "../standardcontrol/standardcontrol.mock";

export class BooleanControlMock extends StandardControlMock<BooleanControlMock, BooleanAttributeMock, boolean>
                                implements Xrm.Controls.StandardControl {
    constructor(components: IBooleanControlComponents) {
        super(components);
    }
}

export interface IBooleanControlComponents
    extends IAttBooleanControlComponents,
            IStandardControlComponents<BooleanControlMock, BooleanAttributeMock, boolean> {
    name: string;
}

export interface IAttBooleanControlComponents
    extends IAttStandardControlComponents<BooleanControlMock, BooleanAttributeMock, boolean> {
}
