import { ItemCollectionMock } from "../collection/itemcollection/itemcollection.mock";
import { FormItemMock } from "../controls/formitem/formitem.mock";
import { FormSelectorMock } from "../controls/formselector/formselector.mock";

export class UiMock implements Xrm.Ui {
    public process: Xrm.Controls.ProcessControl;
    public controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
    public formSelector: FormSelectorMock;
    public navigation: Xrm.Controls.Navigation;
    public tabs: Xrm.Collection.ItemCollection<Xrm.Controls.Tab>;
    public quickForms: Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl>;
    public formNotifications: [{ message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string }];

    constructor(components: IUiComponents) {
        this.process = components.process;
        this.controls = components.controls || new ItemCollectionMock([]);
        this.formSelector = components.formSelector;
        this.navigation = components.navigation;
        this.tabs = components.tabs ||  new ItemCollectionMock([]);
        this.quickForms = components.quickForms || new ItemCollectionMock([]);
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
    process?: Xrm.Controls.ProcessControl;
    controls?: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
    formSelector?: FormSelectorMock;
    navigation?: Xrm.Controls.Navigation;
    tabs?: Xrm.Collection.ItemCollection<Xrm.Controls.Tab>;
    quickForms?: Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl>;
}
