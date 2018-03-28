export class AutoCompleteResult implements Xrm.Page.AutoCompleteResult {
    public id: string | number;
    public icon?: string;
    public fields: string[];

    constructor(id: string | number, fields: string[], icon?: string) {
        this.id = id;
        this.fields = fields;
        this.icon = icon;
    }
}
