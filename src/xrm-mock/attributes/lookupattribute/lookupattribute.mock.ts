import { LookupControlMock } from "../../controls/lookupcontrol/lookupcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";

export class LookupAttributeMock extends AttributeMock<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]>
                                 implements Xrm.Attributes.LookupAttribute {
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

    public getValue(): Xrm.LookupValue[] | null {
        const value = super.getValue();
        if (value === null) {
            return null;
        }
        return value.length > 0 ? value : null;
    }
}

export interface ILookupAttributeComponents extends IAttributeComponents<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]> {
    isPartyList?: boolean;
}
