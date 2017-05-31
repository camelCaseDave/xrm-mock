/// <reference path="../../node_modules/@types/xrm/index.d.ts" />

class UiMock implements Xrm.Ui {
    process: Xrm.Page.ui.ProcessManager;
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    formSelector: Xrm.Page.FormSelector;
    navigation: Xrm.Page.Navigation;
    tabs: Xrm.Collection.ItemCollection<Xrm.Page.Tab>;
    quickForms: Xrm.Collection.ItemCollection<Xrm.Page.ui.QuickForm>;

    constructor(process?: Xrm.Page.ui.ProcessManager, controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>, formSelector?: Xrm.Page.FormSelector, navigation?: Xrm.Page.Navigation,
        tabs?: Xrm.Collection.ItemCollection<Xrm.Page.Tab>, quickForms?: Xrm.Collection.ItemCollection<Xrm.Page.ui.QuickForm>) {
        this.process = process;
        this.controls = controls;
        this.formSelector = formSelector;
        this.navigation = navigation;
        this.tabs = tabs;
        this.quickForms = quickForms;
    }

    setFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string): boolean {
        throw ('setFormNotification not implemented');
    }

    clearFormNotification(uniqueId: string): boolean {
        throw ('clearFormNotification not implemented');
    }
    
    close(): void {
        throw ('close not implemented');
    }

    getFormType(): XrmEnum.FormType {
        throw ('getFormType not implemented');
    }

    getViewPortHeight(): number {
        throw ('getViewPortHeight not implemented');
    }

    getViewPortWidth(): number {
        throw ('getViewPortWidth not implemented');
    }

    refreshRibbon(): void {
        throw ('refreshRibbon not implemented');
    }   
}