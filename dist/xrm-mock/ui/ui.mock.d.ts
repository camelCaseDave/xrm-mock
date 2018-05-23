/// <reference types="xrm" />
import { FormSelectorMock } from "../controls/formselector/formselector.mock";
export declare class UiMock implements Xrm.Ui {
    process: Xrm.Page.ui.ProcessManager;
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    formSelector: FormSelectorMock;
    navigation: Xrm.Page.Navigation;
    tabs: Xrm.Collection.ItemCollection<Xrm.Page.Tab>;
    quickForms: Xrm.Collection.ItemCollection<Xrm.Page.ui.QuickForm>;
    formNotifications: [{
        message: string;
        level: Xrm.Page.ui.FormNotificationLevel;
        uniqueId: string;
    }];
    constructor(components: IUiComponents);
    setFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string): boolean;
    clearFormNotification(uniqueId: string): boolean;
    close(): void;
    getFormType(): XrmEnum.FormType;
    getViewPortHeight(): number;
    getViewPortWidth(): number;
    refreshRibbon(): void;
    private _getFormNotificationExists(notifications, uniqueId);
}
export interface IUiComponents {
    process?: Xrm.Page.ui.ProcessManager;
    controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    formSelector?: FormSelectorMock;
    navigation?: Xrm.Page.Navigation;
    tabs?: Xrm.Collection.ItemCollection<Xrm.Page.Tab>;
    quickForms?: Xrm.Collection.ItemCollection<Xrm.Page.ui.QuickForm>;
}
