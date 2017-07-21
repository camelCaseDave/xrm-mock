export class UiMock implements Xrm.Ui {
    process: Xrm.Page.ui.ProcessManager;
    controls: Xrm.Collection.ItemCollection<Xrm.Page.Control>;
    formSelector: Xrm.Page.FormSelector;
    navigation: Xrm.Page.Navigation;
    tabs: Xrm.Collection.ItemCollection<Xrm.Page.Tab>;
    quickForms: Xrm.Collection.ItemCollection<Xrm.Page.ui.QuickForm>;
    formNotifications: [{ message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string }];

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
        let formNotificationAlreadyExists = false;
        if (this.formNotifications && this.formNotifications.length) {
            formNotificationAlreadyExists = function () {
                let matchingNotificationsById = this.formNotifications.filter(function (item) {
                    return item.uniqueId === uniqueId;
                });
                return matchingNotificationsById && matchingNotificationsById.length;
            }();
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

    clearFormNotification(uniqueId: string): boolean {
        if (this.formNotifications && this.formNotifications.length) {
            let matchingNotificationsById = this.formNotifications.filter(function (item) {
                return item.uniqueId === uniqueId;
            });

            if (matchingNotificationsById && matchingNotificationsById.length) {
                let index = this.formNotifications.indexOf(matchingNotificationsById[0]);
                this.formNotifications.splice(index, 1);
                return true;
            } else {
                return false;
            }
        }
        return false;
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