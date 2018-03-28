export class LookupControlMock implements Xrm.Page.LookupControl {
    public standardControl: Xrm.Page.StandardControl;
    public preSearchHandlers: Xrm.Page.ContextSensitiveHandler[] = [];
    public views: [{ viewId: string, entityName: string, viewDisplayName: string,
                     fetchXml: string, layoutXml: string, isDefault: boolean }];
    public filters: [{ filter: string, entityLogicalName?: string }];

    constructor(standardControl: Xrm.Page.StandardControl,
                filters: [{ filter: string, entityLogicalName?: string }],
                views?: [{ viewId: string, entityName: string, viewDisplayName: string,
                           fetchXml: string, layoutXml: string, isDefault: boolean }],
                preSearchHandlers?: Xrm.Page.ContextSensitiveHandler[]) {
        this.standardControl = standardControl;
        this.views = views;
        this.filters = filters;
        this.preSearchHandlers = preSearchHandlers || [];

        if (views && views.length > 1) {
            let numberOfDefaultViews = 0;
            for (const view of views) {
                if (numberOfDefaultViews > 1) {
                    throw new Error(("Lookup Control cannot have more than one default view."));
                }
                if (view.isDefault) {
                    numberOfDefaultViews++;
                }
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
        // TODO check if default view already exists.
        this.views.push({
            entityName,
            fetchXml,
            isDefault,
            layoutXml,
            viewDisplayName,
            viewId,
        });
    }

    public getAttribute(): Xrm.Page.LookupAttribute {
        return this.standardControl.getAttribute() as Xrm.Page.LookupAttribute;
    }

    public getDefaultView(): string {
        for (const view of this.views) {
            if (view.isDefault) {
                return view.viewId;
            }
        }
    }

    public removePreSearch(handler: () => void): void {
        throw new Error("remove presearch not implemented");
    }

    public setDefaultView(viewGuid: string): void {
        for (const view of this.views) {
            view.isDefault = view.viewId === viewGuid;
        }
    }

    public clearNotification(uniqueId?: string): boolean {
        return this.standardControl.clearNotification(uniqueId);
    }

    public getDisabled(): boolean {
        return this.standardControl.getDisabled();
    }

    public setDisabled(disabled: boolean): void {
        this.standardControl.setDisabled(disabled);
    }

    public setNotification(message: string, uniqueId: string): boolean {
        return this.standardControl.setNotification(message, uniqueId);
    }

    public getControlType(): Xrm.Page.ControlType | string {
        return this.standardControl.getControlType();
    }

    public getName(): string {
        return this.standardControl.getName();
    }

    public getParent(): Xrm.Page.Section {
        return this.standardControl.getParent();
    }

    public getLabel(): string {
        return this.standardControl.getLabel();
    }

    public setLabel(label: string): void {
        this.standardControl.setLabel(label);
    }

    public getVisible(): boolean {
        return this.standardControl.getVisible();
    }

    public setVisible(visible: boolean): void {
        this.standardControl.setVisible(visible);
    }

    public setFocus(): void {
        this.standardControl.setFocus();
    }
}
