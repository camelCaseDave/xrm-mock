/// <reference types="xrm" />
import { NumberControlMock } from "../../controls/numbercontrol/numbercontrol.mock";
import { AttributeMock, IAttributeComponents } from "../attribute/attribute.mock";
export declare class NumberAttributeMock extends AttributeMock<NumberControlMock, number> implements Xrm.Attributes.NumberAttribute {
    private static defaultComponents;
    min: number;
    max: number;
    precision: number;
    constructor(components: INumberAttributeComponents);
    getFormat(): Xrm.Attributes.IntegerAttributeFormat;
    getMax(): number;
    getMin(): number;
    getPrecision(): number;
    setPrecision(value: number): void;
    setValue(value: number): void;
    private validatePrecision;
}
export interface INumberAttributeComponents extends IAttributeComponents<NumberControlMock, number> {
    min?: number;
    max?: number;
    precision?: number;
    format?: Xrm.Attributes.IntegerAttributeFormat;
}
