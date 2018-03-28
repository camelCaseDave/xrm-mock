/// <reference types="xrm" />
export declare class LookupControlMock implements Xrm.Page.LookupControl {
    standardControl: Xrm.Page.StandardControl;
    preSearchHandlers: Xrm.Page.ContextSensitiveHandler[];
    views: [{
        viewId: string;
        entityName: string;
        viewDisplayName: string;
        fetchXml: string;
        layoutXml: string;
        isDefault: boolean;
    }];
    filters: [{
        filter: string;
        entityLogicalName?: string;
    }];
    constructor(standardControl: Xrm.Page.StandardControl, filters: [{
        filter: string;
        entityLogicalName?: string;
    }], views?: [{
        viewId: string;
        entityName: string;
        viewDisplayName: string;
        fetchXml: string;
        layoutXml: string;
        isDefault: boolean;
    }], preSearchHandlers?: Xrm.Page.ContextSensitiveHandler[]);
    addPreSearch(handler: Xrm.Page.ContextSensitiveHandler): void;
    addCustomFilter(filter: string, entityLogicalName?: string): void;
    addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;
    getAttribute(): Xrm.Page.LookupAttribute;
    getDefaultView(): string;
    removePreSearch(handler: () => void): void;
    setDefaultView(viewGuid: string): void;
    clearNotification(uniqueId?: string): boolean;
    getDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    setNotification(message: string, uniqueId: string): boolean;
    getControlType(): Xrm.Page.ControlType | string;
    getName(): string;
    getParent(): Xrm.Page.Section;
    getLabel(): string;
    setLabel(label: string): void;
    getVisible(): boolean;
    setVisible(visible: boolean): void;
    setFocus(): void;
}
