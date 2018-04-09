/// <reference types="xrm" />
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
import { NumberControlMock } from "../numbercontrol/numbercontrol.mock";
export declare class NumberAttributeMock extends AttributeMock<NumberControlMock, number> implements Xrm.Page.NumberAttribute {
    private static defaultComponents(components);
    min: number;
    max: number;
    precision: number;
    constructor(components: INumberAttributeComponents);
    getFormat(): Xrm.Page.IntegerAttributeFormat;
    getMax(): number;
    getMin(): number;
    getPrecision(): number;
    setValue(value: number): void;
    private validatePrecision();
}
export interface INumberAttributeComponents extends IAttributeComponents<NumberControlMock, number> {
    min?: number;
    max?: number;
    precision?: number;
    format?: Xrm.Page.IntegerAttributeFormat;
}
