export class LookupControlMock implements Xrm.Page.LookupControl {
    standardControl: Xrm.Page.StandardControl;
    preSearchHandlers: Xrm.Page.ContextSensitiveHandler[] = [];
    views: [{ viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean }];
    filters: [{ filter: string, entityLogicalName?: string }];

    constructor(standardControl: Xrm.Page.StandardControl, filters: [{ filter: string, entityLogicalName?: string }],
        views?: [{ viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean }], preSearchHandlers?: Xrm.Page.ContextSensitiveHandler[]) {
        this.standardControl = standardControl;
        this.views = views;
        this.filters = filters;
        this.preSearchHandlers = preSearchHandlers || [];

        if (views && views.length > 1) {
            let numberOfDefaultViews = 0;
            for (var i = 0; i < views.length; i++) {
                if (numberOfDefaultViews > 1) {
                    throw ('Lookup Control cannot have more than one default view.');
                }
                if (views[i].isDefault) {
                    numberOfDefaultViews++;
                }
            }
        }
    }

    addPreSearch(handler: Xrm.Page.ContextSensitiveHandler): void {
        this.preSearchHandlers.push(handler);
    }

    addCustomFilter(filter: string, entityLogicalName?: string): void {
        this.filters.push({ filter: filter, entityLogicalName: entityLogicalName });
    }

    addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void {
        // TODO check if default view already exists.
        this.views.push({
            viewId: viewId,
            entityName: entityName,
            viewDisplayName: viewDisplayName,
            fetchXml: fetchXml,
            layoutXml: layoutXml,
            isDefault: isDefault
        });
    }

    getAttribute(): Xrm.Page.LookupAttribute {
        return this.standardControl.getAttribute() as Xrm.Page.LookupAttribute;
    }

    getDefaultView(): string {
        for (var i = 0; i < this.views.length; i++) {
            if (this.views[i].isDefault) {
                return this.views[i].viewId;
            }
        }
    }

    removePreSearch(handler: () => void): void {
        throw ('remove presearch not implemented');
        //if (handler && this.preSearchHandlers) {
        //    let indexToRemove = -1;
        //
        //    for (var i = 0; i < this.preSearchHandlers.length; i++) {
        //        if (handler === this.preSearchHandlers[i]) {
        //            indexToRemove = i;
        //        }
        //    }
        //
        //    if (indexToRemove > -1) {
        //        this.preSearchHandlers.splice(indexToRemove, 1);
        //    }
        //}
    }

    setDefaultView(viewGuid: string): void {
        for (var i = 0; i < this.views.length; i++) {
            this.views[i].isDefault = this.views[i].viewId === viewGuid;
        }
    }

    clearNotification(uniqueId?: string): boolean {
        return this.standardControl.clearNotification(uniqueId);
    }

    getDisabled(): boolean {
        return this.standardControl.getDisabled();
    }

    setDisabled(disabled: boolean): void {
        this.standardControl.setDisabled(disabled);
    }

    setNotification(message: string, uniqueId: string): boolean {
        return this.standardControl.setNotification(message, uniqueId);
    }

    getControlType(): Xrm.Page.ControlType | string {
        return this.standardControl.getControlType();
    }

    getName(): string {
        return this.standardControl.getName();
    }

    getParent(): Xrm.Page.Section {
        return this.standardControl.getParent();
    }

    getLabel(): string {
        return this.standardControl.getLabel();
    }

    setLabel(label: string): void {
        this.standardControl.setLabel(label);
    }

    getVisible(): boolean {
        return this.standardControl.getVisible();
    }

    setVisible(visible: boolean): void {
        this.standardControl.setVisible(visible);
    }

    setFocus(): void {
        this.standardControl.setFocus();
    }
}