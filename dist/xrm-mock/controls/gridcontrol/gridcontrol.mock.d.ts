/// <reference types="xrm" />
import { ControlMock, IAttControlComponents, IControlComponents } from "../control/control.mock";
export declare class GridControlMock extends ControlMock implements Xrm.Controls.GridControl {
    private static defaultComponents;
    onLoadHandlers: Xrm.Events.ContextSensitiveHandler[];
    contextType: XrmEnum.GridControlContext;
    entityName: string;
    constructor(components: IGridControlComponents);
    addOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void;
    getContextType(): XrmEnum.GridControlContext;
    getEntityName(): string;
    getGrid(): Xrm.Controls.Grid;
    getViewSelector(): Xrm.Controls.ViewSelector;
    refresh(): void;
    removeOnLoad(handler: () => void): void;
}
export interface IGridControlComponents extends IAttGridControlComponents, IControlComponents {
    name: string;
}
export interface IAttGridControlComponents extends IAttControlComponents {
    contextType?: XrmEnum.GridControlContext;
    entityName?: string;
    name?: string;
    onLoadHandlers?: Xrm.Events.ContextSensitiveHandler[];
}
