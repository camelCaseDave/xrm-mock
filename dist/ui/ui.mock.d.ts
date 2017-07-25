/// <reference types="xrm" />
export declare class UiMock implements Xrm.Ui {
    process: Xrm.Page.ui.ProcessManager;
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    formSelector: Xrm.Page.FormSelector;
    navigation: Xrm.Page.Navigation;
    tabs: Xrm.Collection.ItemCollection<Xrm.Page.Tab>;
    quickForms: Xrm.Collection.ItemCollection<Xrm.Page.ui.QuickForm>;
    formNotifications: [{
        message: string;
        level: Xrm.Page.ui.FormNotificationLevel;
        uniqueId: string;
    }];
    constructor(process?: Xrm.Page.ui.ProcessManager, controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>, formSelector?: Xrm.Page.FormSelector, navigation?: Xrm.Page.Navigation, tabs?: Xrm.Collection.ItemCollection<Xrm.Page.Tab>, quickForms?: Xrm.Collection.ItemCollection<Xrm.Page.ui.QuickForm>);
    setFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string): boolean;
    clearFormNotification(uniqueId: string): boolean;
    close(): void;
    getFormType(): XrmEnum.FormType;
    getViewPortHeight(): number;
    getViewPortWidth(): number;
    refreshRibbon(): void;
}
