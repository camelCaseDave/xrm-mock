import { ControlMock, IAttControlComponents, IControlComponents } from "../control/control.mock";

export class GridControlMock extends ControlMock implements Xrm.Controls.GridControl {
    private static defaultComponents(components: IGridControlComponents): IGridControlComponents {
        components.controlType = "subgrid";
        components.contextType = components.contextType || 4 as XrmEnum.GridControlContext.FormContextRelated;
        components.entityName = components.entityName || "contact";
        components.onLoadHandlers = components.onLoadHandlers || [];
        return components;
    }

    public onLoadHandlers: Xrm.Events.ContextSensitiveHandler[];
    public contextType: XrmEnum.GridControlContext;
    public entityName: string;
    public viewSelector?: Xrm.Controls.ViewSelector;
    public grid?: Xrm.Controls.Grid;
    public relationship?: Xrm.Controls.GridRelationship;
    private _visible: boolean;

    constructor(components: IGridControlComponents) {
        super(GridControlMock.defaultComponents(components));

        this.contextType = components.contextType;
        this.entityName = components.entityName;
        this.onLoadHandlers = components.onLoadHandlers;
        this.viewSelector = components.viewSelector;
        this.grid = components.grid;
        this.relationship = components.relationship;
        this._visible = components.visible !== undefined ? components.visible : true;
    }
    public setVisible(visible: boolean): void {
       this._visible = visible;
    }
    public refreshRibbon(): void {
        throw new Error("Method not implemented.");
    }
    public addOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void {
        this.onLoadHandlers.push(handler);
    }
    public getContextType(): XrmEnum.GridControlContext {
        return this.contextType;
    }
    public getEntityName(): string {
        return this.entityName;
    }
    public getGrid(): Xrm.Controls.Grid {
        return this.grid;
    }
    public getViewSelector(): Xrm.Controls.ViewSelector {
        return this.viewSelector;
    }
    public getVisible(): boolean {
        return this._visible;
    }
    public refresh(): void {
        throw new Error("Method not implemented.");
    }
    public removeOnLoad(handler: () => void): void {
        for (let i = this.onLoadHandlers.length - 1; i >= 0; i--) {
            const func = this.onLoadHandlers[i];
            if (func === handler) {
                this.onLoadHandlers.splice(i, 1);
                break;
            }
        }
    }
    public getFetchXml(): string {
        throw new Error("getFetchXml not implemented.");
    }
    public getGridType(): number {
        throw new Error("getGridType not implemented.");
    }

    public getRelationship(): Xrm.Controls.GridRelationship {
        return this.relationship;
    }

    public getUrl(client: number): string {
        throw new Error("getUrl not implemented.");
    }

    public openRelatedGrid(): void {
        throw new Error("openRelatedGrid not implemented.");
    }
}

export interface IGridControlComponents extends IAttGridControlComponents, IControlComponents {
    name: string;
    viewSelector?: Xrm.Controls.ViewSelector;
    grid?: Xrm.Controls.Grid;
    relationship?: Xrm.Controls.GridRelationship;
}

export interface IAttGridControlComponents extends IAttControlComponents {
    contextType?: XrmEnum.GridControlContext;
    entityName?: string;
    name?: string;
    onLoadHandlers?: Xrm.Events.ContextSensitiveHandler[];
}
