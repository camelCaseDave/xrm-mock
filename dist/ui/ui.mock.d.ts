/// <reference types="xrm" />
import { FormSelectorMock } from '../page/formselector/formselector.mock';
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
    constructor(components: UiComponents);
    setFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string): boolean;
    clearFormNotification(uniqueId: string): boolean;
    close(): void;
    getFormType(): XrmEnum.FormType;
    getViewPortHeight(): number;
    getViewPortWidth(): number;
    refreshRibbon(): void;
}
export interface UiComponents {
    process?: Xrm.Page.ui.ProcessManager;
    controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    formSelector?: FormSelectorMock;
    navigation?: Xrm.Page.Navigation;
    tabs?: Xrm.Collection.ItemCollection<Xrm.Page.Tab>;
    quickForms?: Xrm.Collection.ItemCollection<Xrm.Page.ui.QuickForm>;
}
