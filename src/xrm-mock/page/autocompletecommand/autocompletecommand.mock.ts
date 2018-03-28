export class AutoCompleteCommandMock implements Xrm.Page.AutoCompleteCommand {
    public id: string;
    public icon?: string;
    public label: string;

    constructor(id: string, label: string, icon?: string, action?: () => void) {
        this.id = id;
        this.label = label;
        this.icon = icon;
        this.action = action;
    }

    public action(): void {
        throw new Error(("action not implemented."));
    }
}
