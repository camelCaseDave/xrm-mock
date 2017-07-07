export class AutoCompleteResult implements Xrm.Page.AutoCompleteResult {
    id: string | number;
    icon?: string;
    fields: string[];

    constructor(id: string | number, fields: string[], icon?: string) {
        this.id = id;
        this.fields = fields;
        this.icon = icon;
    }
}