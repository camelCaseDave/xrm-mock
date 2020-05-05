import { LookupAttributeMock } from "../../attributes/lookupattribute/lookupattribute.mock";
import {
    IAttStandardControlComponents,
    IStandardControlComponents,
    StandardControlMock,
} from "../standardcontrol/standardcontrol.mock";

export class LookupControlMock extends StandardControlMock<LookupControlMock,
    LookupAttributeMock, Xrm.LookupValue[]>
    implements Xrm.Controls.LookupControl {

    private static defaultComponents(components: ILookupControlComponents): ILookupControlComponents {
        components.controlType = "lookup";
        return components;
    }

    public preSearchHandlers: Xrm.Events.ContextSensitiveHandler[] = [];
    public views: ILookupView[];
    public filters: ILookupFilter[];

    constructor(components: ILookupControlComponents) {
        super(LookupControlMock.defaultComponents(components));
        this.views = components.views || [];
        this.filters = components.filters || [];
        this.preSearchHandlers = components.preSearchHandlers || [];

        if (this.views && this.views.length > 1) {
            const defaultViews = this.views.filter((v) => v.isDefault).length;

            if (defaultViews > 1) {
                throw new Error("Lookup Control cannot have more than one default view.");
            } else if (defaultViews === 0) {
                this.views[0].isDefault = true;
            }
        }
    }

    public addPreSearch(handler: Xrm.Events.ContextSensitiveHandler): void {
        this.preSearchHandlers.push(handler);
    }

    public addCustomFilter(filter: string, entityLogicalName?: string): void {
        this.filters.push({ filter, entityLogicalName });
    }

    public addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string,
                         layoutXml: string, isDefault: boolean): void {
        if (isDefault && this.getDefaultView()) {
            throw new Error("Lookup Control cannot have more than one default view.");
        }

        this.views.push({
            entityName,
            fetchXml,
            isDefault,
            layoutXml,
            viewDisplayName,
            viewId,
        });
    }

    public getDefaultView(): string {
        for (const view of this.views) {
            if (view.isDefault) {
                return view.viewId;
            }
        }

        throw new Error("No default view was found!");
    }

    public getEntityTypes(): string[] {
        throw new Error("Method not implemented.");
    }

    public setEntityTypes(entityLogicalNames: string[]): void {
        throw new Error("Method not implemented.");
    }

    public removePreSearch(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("remove presearch not implemented");
    }

    public setDefaultView(viewGuid: string): void {
        for (const view of this.views) {
            view.isDefault = view.viewId === viewGuid;
        }
    }

    public addOnLookupTagClick(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("addOnLookupTagClick not implemented");
    }

    public removeOnLookupTagClick(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("removeOnLookupTagClick not implemented");
    }
}

export interface ILookupControlComponents
    extends IStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]>,
    IAttLookupControlComponents {
    name: string;
}

export interface IAttLookupControlComponents
    extends IAttStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]> {
    filters?: ILookupFilter[];
    views?: ILookupView[];
    preSearchHandlers?: Xrm.Events.ContextSensitiveHandler[];
}

export interface ILookupFilter {
    filter: string;
    entityLogicalName?: string;
}

export interface ILookupView {
    viewId: string;
    entityName: string;
    viewDisplayName: string;
    fetchXml: string;
    layoutXml: string;
    isDefault: boolean;
}
