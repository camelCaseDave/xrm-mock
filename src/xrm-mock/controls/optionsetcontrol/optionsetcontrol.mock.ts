import { OptionSetAttributeMock } from "../../attributes/optionsetattribute/optionsetattribute.mock";
import { OptionSetValueMock } from "../../optionsetvalue/optionsetvalue.mock";
import {
    IAttStandardControlComponents,
    IStandardControlComponents,
    StandardControlMock
} from "../standardcontrol/standardcontrol.mock";

export class OptionSetControlMock extends StandardControlMock<OptionSetControlMock, OptionSetAttributeMock, number>
    implements Xrm.Controls.OptionSetControl {

    private static defaultComponents(components: IOptionSetControlComponents): IOptionSetControlComponents {
        components.controlType = "optionset";
        return components;
    }

    public options: OptionSetValueMock[];

    constructor(components: IOptionSetControlComponents) {
        super(OptionSetControlMock.defaultComponents(components));
        this.options = components.options || [];
    }

    public addOption(option: Xrm.OptionSetValue, index?: number): void {
        index = index || index === 0
            ? index
            : this.options.length;

        this.options.splice(index, 0, option);
    }

    public clearOptions(): void {
        const length = this.options.length;
        if (length) {
            this.options.splice(0, length);
        }
    }

    public removeOption(value: number): void {
        let option: OptionSetValueMock;
        for (const item of this.options) {
            if (item.value === value) {
                option = item;
                break;
            }
        }
        const index = this.options.indexOf(option);
        this.options.splice(index, 1);

        // check if attribute is linked and update the removal accordingly
        if (this.attribute && this.attribute.options) {
            let attrOption: OptionSetValueMock;
            for (const item2 of this.attribute.options) {
                if (item2.value === value) {
                    attrOption = item2;
                    break;
                }
            }

            const attrIndex = this.attribute.options.indexOf(attrOption);
            this.attribute.options.splice(attrIndex, 1);
        }
    }

    public getOptions(): Xrm.OptionSetValue[] {
        return this.options;
    }
}

export interface IOptionSetControlComponents
    extends IStandardControlComponents<OptionSetControlMock, OptionSetAttributeMock, number>,
    IAttOptionSetControlComponents {
    name: string;
}

export interface IAttOptionSetControlComponents
    extends IAttStandardControlComponents<OptionSetControlMock, OptionSetAttributeMock, number> {
    options?: Xrm.OptionSetValue[];
}
