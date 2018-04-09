import { AttributeMock, AttributeReturnType } from "../attribute/attribute.mock";
import { LookupAttributeMock } from "../lookupattribute/lookupattribute.mock";
import { IAttStandardControlComponents,
         IStandardControlComponents,
         StandardControlMock } from "../standardcontrol/standardcontrol.mock";
import { UiKeyPressableMock } from "../uikeypressable/uikeypressable.mock";

export class LookupControlMock extends StandardControlMock<LookupControlMock,
                                                           LookupAttributeMock, Xrm.Page.LookupValue[]>
                               implements Xrm.Page.LookupControl {

    private static defaultComponents(components: ILookupControlComponents): ILookupControlComponents {
        components.controlType = "lookup";
        return components;
    }

    public preSearchHandlers: Xrm.Page.ContextSensitiveHandler[] = [];
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

    public addPreSearch(handler: Xrm.Page.ContextSensitiveHandler): void {
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

    public removePreSearch(handler: () => void): void {
        throw new Error("remove presearch not implemented");
    }

    public setDefaultView(viewGuid: string): void {
        for (const view of this.views) {
            view.isDefault = view.viewId === viewGuid;
        }
    }
}

export interface ILookupControlComponents
    extends IStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.Page.LookupValue[]>,
            IAttLookupControlComponents {
    name: string;
}

export interface IAttLookupControlComponents
    extends IAttStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.Page.LookupValue[]> {
    filters?: ILookupFilter[];
    views?: ILookupView[];
    preSearchHandlers?: Xrm.Page.ContextSensitiveHandler[];
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
