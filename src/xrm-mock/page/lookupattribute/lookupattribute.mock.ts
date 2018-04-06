import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
import { ControlMock } from "../control/control.mock";
import { LookupControlMock } from "../lookupcontrol/lookupcontrol.mock";

export class LookupAttributeMock extends AttributeMock<LookupControlMock, Xrm.Page.LookupValue[]>
                                 implements Xrm.Page.LookupAttribute {
    private static defaultComponents(components: ILookupAttributeComponents): ILookupAttributeComponents {
        if (!("isPartyList" in components)) {
            components.isPartyList = false;
        }

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
