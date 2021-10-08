/// <reference types="xrm" />
import { ControlMock, IAttControlComponents, IControlComponents } from "../control/control.mock";
export declare class GridControlMock extends ControlMock implements Xrm.Controls.GridControl {
    private static defaultComponents;
    onLoadHandlers: Xrm.Events.ContextSensitiveHandler[];
    contextType: XrmEnum.GridControlContext;
    entityName: string;
    viewSelector?: Xrm.Controls.ViewSelector;
    grid?: Xrm.Controls.Grid;
    relationship?: Xrm.Navigation.Relationship;
    constructor(components: IGridControlComponents);
    setVisible(visible: boolean): void;
    refreshRibbon(): void;
    addOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void;
    getContextType(): XrmEnum.GridControlContext;
    getEntityName(): string;
    getGrid(): Xrm.Controls.Grid;
    getViewSelector(): Xrm.Controls.ViewSelector;
    refresh(): void;
    removeOnLoad(handler: () => void): void;
    getFetchXml(): string;
    getGridType(): number;
    getRelationship(): Xrm.Navigation.Relationship;
    getUrl(client: number): string;
    openRelatedGrid(): void;
}
export interface IGridControlComponents extends IAttGridControlComponents, IControlComponents {
    name: string;
    viewSelector?: Xrm.Controls.ViewSelector;
    grid?: Xrm.Controls.Grid;
    relationship?: Xrm.Navigation.Relationship;
}
export interface IAttGridControlComponents extends IAttControlComponents {
    contextType?: XrmEnum.GridControlContext;
    entityName?: string;
    name?: string;
    onLoadHandlers?: Xrm.Events.ContextSensitiveHandler[];
}
