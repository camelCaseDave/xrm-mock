import { AttributeMock, AttributeReturnType } from "../attribute/attribute.mock";
import { ControlMock, IAttControlComponents, IControlComponents } from "../control/control.mock";
import { LookupAttributeMock } from "../lookupattribute/lookupattribute.mock";
import { UiKeyPressableMock } from "../uikeypressable/uikeypressable.mock";

export class GridControlMock extends ControlMock implements Xrm.Page.GridControl {
    private static defaultComponents(components: IGridControlComponents): IGridControlComponents {
        components.controlType = "subgrid";
        components.contextType = components.contextType || 4 as XrmEnum.GridControlContext.FormContextRelated;
        components.entityName = components.entityName || "contact";
        components.onLoadHandlers = components.onLoadHandlers || [];
        return components;
    }

    public onLoadHandlers: Array<() => void>;
    public contextType: XrmEnum.GridControlContext;
    public entityName: string;

    constructor(components: IGridControlComponents) {
        super(GridControlMock.defaultComponents(components));

        this.contextType = components.contextType;
        this.entityName = components.entityName;
        this.onLoadHandlers = components.onLoadHandlers;
    }

    public addOnLoad(handler: () => void): void {
        this.onLoadHandlers.push(handler);
    }
    public getContextType(): XrmEnum.GridControlContext {
        return this.contextType;
    }
    public getEntityName(): string {
        return this.entityName;
    }
    public getGrid(): Xrm.Controls.Grid {
        throw new Error("Method not implemented.");
    }
    public getViewSelector(): Xrm.Controls.ViewSelector {
        throw new Error("Method not implemented.");
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
}

export interface IGridControlComponents extends IAttGridControlComponents, IControlComponents {
    name: string;
}

export interface IAttGridControlComponents extends IAttControlComponents {
    contextType?: XrmEnum.GridControlContext;
    entityName?: string;
    name?: string;
    onLoadHandlers?: Array<() => void>;

}
