import { ControlMock } from "../../page/control/control.mock";
import { LookupControlMock } from "../../page/lookupcontrol/lookupcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";

export class LookupAttributeMock extends AttributeMock<LookupControlMock, Xrm.Page.LookupValue[]>
                                 implements Xrm.Page.LookupAttribute {
    private static defaultComponents(components: ILookupAttributeComponents): ILookupAttributeComponents {
        if (!("isPartyList" in components)) {
            components.isPartyList = false;
        }
        components.attributeType = "lookup";
        return components;
    }

    public isPartyList: boolean;

    constructor(components: ILookupAttributeComponents) {
        super(LookupAttributeMock.defaultComponents(components));
        this.isPartyList = components.isPartyList;
    }

    public getIsPartyList(): boolean {
        return this.isPartyList;
    }
}

export interface ILookupAttributeComponents extends IAttributeComponents<LookupControlMock, Xrm.Page.LookupValue[]> {
    isPartyList?: boolean;
}
