export class AutoCompleteCommandMock implements Xrm.Page.AutoCompleteCommand {
    id: string;
    icon?: string;
    label: string;

    constructor(id: string, label: string, icon?: string, action?: () => void) {
        this.id = id;
        this.label = label;
        this.icon = icon;
        this.action = action;
    }

    action(): void { }
}