/// <reference types="xrm" />
import { LookupControlMock } from "../../controls/lookupcontrol/lookupcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class LookupAttributeMock extends AttributeMock<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]> implements Xrm.Attributes.LookupAttribute {
    private static defaultComponents;
    isPartyList: boolean;
    constructor(components: ILookupAttributeComponents);
    getIsPartyList(): boolean;
    getValue(): Xrm.LookupValue[] | null;
}
export interface ILookupAttributeComponents extends IAttributeComponents<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]> {
    isPartyList?: boolean;
}
