/// <reference types="xrm" />
import { LookupControlMock } from "../../controls/lookupcontrol/lookupcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class LookupAttributeMock extends AttributeMock<LookupControlMock, Xrm.LookupValue[]> implements Xrm.Attributes.LookupAttribute {
    private static defaultComponents;
    isPartyList: boolean;
    constructor(components: ILookupAttributeComponents);
    getIsPartyList(): boolean;
}
export interface ILookupAttributeComponents extends IAttributeComponents<LookupControlMock, Xrm.LookupValue[]> {
    isPartyList?: boolean;
}
