import { FormItemMock } from "../page/formitem/formitem.mock";
import { FormSelectorMock } from "../page/formselector/formselector.mock";

export class UiMock implements Xrm.Ui {
    public process: Xrm.Page.ui.ProcessManager;
    public controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    public formSelector: FormSelectorMock;
    public navigation: Xrm.Page.Navigation;
    public tabs: Xrm.Collection.ItemCollection<Xrm.Page.Tab>;
    public quickForms: Xrm.Collection.ItemCollection<Xrm.Page.ui.QuickForm>;
    public formNotifications: [{ message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string }];

    constructor(components: IUiComponents) {
        this.process = components.process;
        this.controls = components.controls;
        this.formSelector = components.formSelector;
        this.navigation = components.navigation;
        this.tabs = components.tabs;
        this.quickForms = components.quickForms;
    }

    public setFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string): boolean {
        let formNotificationAlreadyExists = false;
        if (this.formNotifications && this.formNotifications.length) {
            formNotificationAlreadyExists = this._getFormNotificationExists(this.formNotifications, uniqueId);
        }

        if (formNotificationAlreadyExists) {
            return false;
        } else {
            if (this.formNotifications && this.formNotifications.length) {
                this.formNotifications.push({ message, level, uniqueId });
            } else {
                this.formNotifications = [{ message, level, uniqueId }];
            }
            return true;
        }
    }

    public clearFormNotification(uniqueId: string): boolean {
        if (this.formNotifications && this.formNotifications.length) {
            const matchingNotificationsById = this.formNotifications.filter((item) => {
                return item.uniqueId === uniqueId;
            });

            if (matchingNotificationsById && matchingNotificationsById.length) {
                const index = this.formNotifications.indexOf(matchingNotificationsById[0]);
                this.formNotifications.splice(index, 1);
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    public close(): void {
        throw new Error(("close not implemented"));
    }

    public getFormType(): XrmEnum.FormType {
        if (this.formSelector) {
            const currentForm = this.formSelector.getCurrentItem() as FormItemMock;

            if (currentForm) {
                return currentForm.formType;
            }
        } else {
            return XrmEnum.FormType.Undefined;
        }
    }

    public getViewPortHeight(): number {
        throw new Error(("getViewPortHeight not implemented"));
    }

    public getViewPortWidth(): number {
        throw new Error(("getViewPortWidth not implemented"));
    }

    public refreshRibbon(): void {
        throw new Error(("refreshRibbon not implemented"));
    }

    private _getFormNotificationExists(notifications, uniqueId): boolean {
        const matchingNotificationsById = notifications.filter((item) => {
            return item.uniqueId === uniqueId;
        });
        return matchingNotificationsById && matchingNotificationsById.length ? true : false;
    }
}

export interface IUiComponents {
    process?: Xrm.Page.ui.ProcessManager;
    controls?: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    formSelector?: FormSelectorMock;
    navigation?: Xrm.Page.Navigation;
    tabs?: Xrm.Collection.ItemCollection<Xrm.Page.Tab>;
    quickForms?: Xrm.Collection.ItemCollection<Xrm.Page.ui.QuickForm>;
}
