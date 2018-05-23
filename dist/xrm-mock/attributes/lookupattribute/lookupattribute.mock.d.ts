/// <reference types="xrm" />
import { LookupControlMock } from "../../page/lookupcontrol/lookupcontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class LookupAttributeMock extends AttributeMock<LookupControlMock, Xrm.Page.LookupValue[]> implements Xrm.Page.LookupAttribute {
    private static defaultComponents(components);
    isPartyList: boolean;
    constructor(components: ILookupAttributeComponents);
    getIsPartyList(): boolean;
}
export interface ILookupAttributeComponents extends IAttributeComponents<LookupControlMock, Xrm.Page.LookupValue[]> {
    isPartyList?: boolean;
}
